export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const response = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(process.env.PAYMONGO_SECRET_KEY + ":").toString("base64"),
      },
      body: JSON.stringify({
        data: {
          attributes: {
            line_items: [
              {
                name: "Growth AI – Starter Plan",
                amount: 49900, // ₱499.00
                currency: "PHP",
                quantity: 1,
              },
            ],
            payment_method_types: ["gcash", "card", "paymaya"],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
          },
        },
      }),
    })

    const data = await response.json()
    res.status(200).json({ url: data.data.attributes.checkout_url })
  } catch (err) {
    res.status(500).json({ error: "Payment failed" })
  }
}
