 import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: Request) {
  try {
    const { humanNumber } = await request.json();

    if (!humanNumber) {
      return NextResponse.json(
        { error: "Numéro humain manquant" },
        { status: 400 }
      );
    }

    const voiceResponse = new twilio.twiml.VoiceResponse();

    voiceResponse.say(
      { language: "fr-FR" },
      "Très bien. Je vous transfère maintenant vers une personne humaine."
    );

    voiceResponse.dial(
      {
        answerOnBridge: true,
        timeout: 25,
      },
      humanNumber
    );

    return new NextResponse(voiceResponse.toString(), {
      status: 200,
      headers: {
        "Content-Type": "text/xml",
      },
    });
  } catch (error) {
    console.error("Erreur transfert Tommy :", error);

    return NextResponse.json(
      { error: "Impossible de transférer l’appel" },
      { status: 500 }
    );
  }
}