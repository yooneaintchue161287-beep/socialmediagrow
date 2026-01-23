export default function Pricing() {
  const handleSubscribe = async () => {
    const res = await fetch("/api/create-subscription", {
      method: "POST",
    });
    const data = await res.json();
    window.location.href = data.checkout_url;
  };

  return (
    <div style={styles.page}>
      <h1>Pricing</h1>
      <div style={styles.card}>
        <h2>GrowFast Pro</h2>
        <p>₱199 / month</p>
        <ul>
          <li>✅ Real AI Growth</li>
          <li>✅ Unlimited Campaigns</li>
          <li>✅ Dashboard Access</li>
        </ul>
        <button onClick={handleSubscribe} style={styles.button}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    padding: "40px",
    textAlign: "center",
  },
  card: {
    maxWidth: "400px",
    margin: "0 auto",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
