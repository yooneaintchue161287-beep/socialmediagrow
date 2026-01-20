export default function Pricing() {
  const handlePay = () => {
    alert("Payment flow will start here 💳");
    // Next step: redirect to PayMongo checkout
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Choose Your Plan</h1>
      <p style={styles.subtitle}>
        Grow real followers for less than ads
      </p>

      <div style={styles.card}>
        <h2>Starter</h2>
        <p style={styles.price}>₱499 / month</p>
        <ul style={styles.list}>
          <li>✔ TikTok / Instagram / Facebook</li>
          <li>✔ AI audience targeting</li>
          <li>✔ Real users</li>
        </ul>

        <button
          type="button"
          onClick={handlePay}
          style={styles.button}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0f172a, #020617)",
    color: "#e5e7eb",
    padding: "40px 20px",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    textAlign: "center",
  },

  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "10px",
  },

  subtitle: {
    opacity: 0.8,
    marginBottom: "40px",
  },

  card: {
    maxWidth: "360px",
    margin: "0 auto",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },

  price: {
    fontSize: "28px",
    fontWeight: "700",
    margin: "16px 0",
  },

  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "24px",
    textAlign: "left",
  },

  button: {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    border: "none",
    background: "#22c55e",
    color: "#022c22",
    cursor: "pointer",
  },
};
