import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a social media growth expert helping users grow followers organically.",
        },
        {
          role: "user",
          content:
            "Create a short AI growth plan for TikTok, Instagram, and Facebook.",
        },
      ],
    });

    res.status(200).json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: "AI failed" });
  }
}
