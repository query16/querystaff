 import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Signature Stripe manquante" },
      { status: 400 }
    );
  }
let event: Stripe.Event;

try {
  event = await stripe.webhooks.constructEventAsync(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
} catch (error) {
  const message =
    error instanceof Error ? error.message : String(error);

  console.error("Erreur webhook Stripe :", message);
  

  return NextResponse.json(
    {
      error: "Signature Stripe invalide",
      details: message,
    },
    { status: 400 }
  );
}
if (event.type === "checkout.session.completed") {
  const session = event.data.object as Stripe.Checkout.Session;
  const { data: existingPayment } = await supabase
  .from("live_events")
  .select("id")
  .eq("session_id", session.id)
.maybeSingle();

if (existingPayment) {
  return NextResponse.json({
    received: true,
    duplicate: true,
  });
}
 await supabase.from("live_events").insert({
  event_type: "Paiement validé",
  amount_cents: Number(session.metadata?.amount || 0),
  agent: session.metadata?.agent_name || null,
 customer_email:
  session.customer_details?.email ||
  session.customer_email ||
  null,
customer_name: session.customer_details?.name || null,
session_id: session.id,
});
}
return NextResponse.json({ received: true });
}