export default function Pricing() {
  async function handlePay() {
    try {
      const res = await fetch("/api/paymongo", {
        method: "POST",
      });

      const data = await res.json();

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert("Payment failed");
      }
    } catch (err) {
      alert("Something went wrong");
    }
  }

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Pricing</h1>
      <h2>₱499 / month</h2>
      <p>Grow real followers with AI</p>

      <button
        onClick={handlePay}
        style={{
          padding: "14px 28px",
          fontSize: 16,
          borderRadius: 8,
          background: "#22c55e",
          border: "none",
          cursor: "pointer",
        }}
      >
        Start Growing
      </button>
    </div>
  );
}
