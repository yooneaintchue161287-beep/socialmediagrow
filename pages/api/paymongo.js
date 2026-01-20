export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch("https://api.paymongo.com/v1/links", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(process.env.PAYMONGO_SECRET_KEY + ":").toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: 49900, // ₱499.00 (PayMongo uses centavos)
            description: "GrowFast Monthly Subscription",
            remarks: "Subscription",
          },
        },
      }),
    });

    const data = await response.json();

    res.status(200).json({
      checkoutUrl: data.data.attributes.checkout_url,
    });
  } catch (err) {
    res.status(500).json({ error: "Payment error" });
  }
}
