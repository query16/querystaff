 import Stripe from "stripe";


const agents = {
  gordon: {
    name: "Gordon",
    role: "Restauration",
    amount: 3900,
  },
  emma: {
    name: "Emma",
    role: "Commerce",
    amount: 3900,
  },
  maxime: {
    name: "Maxime",
    role: "Dropshipping",
    amount: 5900,
  },
  agassi: {
    name: "Agassi",
    role: "Formalités d’entreprise",
    amount: 5900,
  },
  sofia: {
  name: "Sofia",
  role: "Santé",
  amount: 3900,
},
lina: {
  name: "Lina",
  role: "Réseaux sociaux",
  amount: 4900,
},
noah: {
  name: "Noah",
  role: "Immobilier",
  amount: 4900,
},
maya: {
  name: "Maya",
  role: "E-commerce",
  amount: 4900,
},
leo: {
  name: "Léo",
  role: "Garage",
  amount: 3900,
},
clara: {
  name: "Clara",
  role: "Administration",
  amount: 4900,
},
  milo: {
    name: "Milo",
    role: "Relations presse & promotion musicale",
    amount: 3900,
  },

};

export async function GET(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return Response.json(
      { error: "Clé Stripe manquante." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });
 
  const url = new URL(request.url);
  const agentKey = url.searchParams.get("agent") || "gordon";

  const agent =
    agents[agentKey as keyof typeof agents] || agents.gordon;

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: agent.amount,
          recurring: {
            interval: "month",
          },
          product_data: {
            name: `QueryStaff — ${agent.name}`,
            description: `Collaborateur IA spécialisé : ${agent.role}`,
          },
        },
      },
    ],
    success_url: `${url.origin}/paiement-reussi?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url.origin}/commander?agent=${agentKey}`,
  });

  return Response.redirect(session.url!, 303);
}