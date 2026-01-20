export default function Pricing() {
  async function handlePay() {
    try {
      const res = await fetch("/api/paymongo", { method: "POST" });
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
    <div style={styles.page}>
      <h1>Pricing</h1>
      <p>₱499 / month — Grow real followers with AI</p>
      <button style={styles.button} onClick={handlePay}>Start Growing</button>
    </div>
  );
}

const styles = {
  page: { padding: 20, textAlign: "center", minHeight: "100vh", background: "#0f172a", color: "#e5e7eb", fontFamily: "system-ui, sans-serif" },
  button: { padding: "14px 28px", fontSize: 16, borderRadius: 8, background: "#22c55e", border: "none", color: "#022c22", cursor: "pointer" },
};
