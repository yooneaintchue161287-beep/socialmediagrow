export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
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
            line_items: [
              {
                amount: 49900, // ₱499.00
                currency: "PHP",
                name: "GrowFast Monthly Plan",
                quantity: 1,
              },
            ],
            payment_method_types: ["card", "gcash", "paymaya"],
            success_url: process.env.NEXT_PUBLIC_SITE_URL + "/dashboard",
            cancel_url: process.env.NEXT_PUBLIC_SITE_URL + "/pricing",
          },
        },
      }),
    });

    const data = await response.json();

    res.status(200).json({
      checkoutUrl: data.data.attributes.checkout_url,
    });
  } catch (error) {
    res.status(500).json({ error: "PayMongo error" });
  }
}
