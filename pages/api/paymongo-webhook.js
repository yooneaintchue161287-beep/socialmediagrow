export default async function handler(req, res) {
  const event = req.body;

  if (event.data.attributes.type === "checkout.session.completed") {
    // TODO: save subscription = active in DB
    console.log("PAYMENT SUCCESS");
  }

  res.status(200).json({ received: true });
}
