export default function Pricing() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💳 Pricing Plans</h1>
      <p style={styles.subtitle}>Grow faster with AI-powered promotion</p>

      <div style={styles.grid}>
        {/* FREE */}
        <div style={styles.card}>
          <h3>Free</h3>
          <p style={styles.price}>$0 / month</p>
          <ul style={styles.list}>
            <li>✔ 1 Campaign</li>
            <li>✔ Basic Reach</li>
            <li>✖ Auto Optimization</li>
          </ul>
          <button style={styles.button}>Current Plan</button>
        </div>

        {/* PRO */}
        <div style={styles.cardHighlight}>
          <h3>🔥 Pro</h3>
          <p style={styles.price}>$19 / month</p>
          <ul style={styles.list}>
            <li>✔ 10 Campaigns</li>
            <li>✔ AI Optimization</li>
            <li>✔ Faster Growth</li>
          </ul>
          <button style={styles.buttonDark} onClick={() => alert('Stripe Checkout coming soon!')}>
  Upgrade
</button>

        </div>

        {/* BUSINESS */}
        <div style={styles.card}>
          <h3>Business</h3>
          <p style={styles.price}>$49 / month</p>
          <ul style={styles.list}>
            <li>✔ Unlimited Campaigns</li>
            <li>✔ Priority Boost</li>
            <li>✔ Analytics</li>
          </ul>
          <button style={styles.button}>Upgrade</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0b0b0b",
    minHeight: "100vh",
    color: "#fff",
  },
  title: {
    color: "#00e5ff",
    marginBottom: "6px",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "#151515",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #222",
  },
  cardHighlight: {
    background: "linear-gradient(135deg, #00e5ff, #0066ff)",
    padding: "20px",
    borderRadius: "14px",
    color: "#000",
  },
  price: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
  },
  button: {
    marginTop: "16px",
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#00e5ff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  buttonDark: {
    marginTop: "16px",
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#000",
    color: "#00e5ff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
