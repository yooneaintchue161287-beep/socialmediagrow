export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

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
            send_email_receipt: true,
            show_description: true,
            line_items: [
              {
                name: "GrowFast Pro Subscription",
                quantity: 1,
                amount: 19900, // ₱199.00
                currency: "PHP",
              },
            ],
            payment_method_types: ["card", "gcash", "paymaya"],
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
          },
        },
      }),
    });

    const data = await response.json();
    res.status(200).json({ checkout_url: data.data.attributes.checkout_url });
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
}
