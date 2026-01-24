export default async function handler(req, res) {
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
              name: "GrowFast Pro",
              amount: 19900,
              currency: "PHP",
              quantity: 1,
            },
          ],
          payment_method_types: ["card", "gcash", "paymaya"],
          success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
        },
      },
    }),
  });

  const data = await response.json();
  res.json({ url: data.data.attributes.checkout_url });
}
