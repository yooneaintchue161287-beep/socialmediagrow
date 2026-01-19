export default function Pricing() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Pricing</h1>

      <p style={styles.subtitle}>
        Simple, affordable, creator-friendly. One plan to get started.
      </p>

      <div style={styles.card}>
        <h2>Starter Plan</h2>
        <p>AI + human-assisted TikTok growth</p>
        <p style={styles.price}>₱499 / campaign</p>
        <button style={styles.button}>
          Start Growth
        </button>
      </div>

      <p style={styles.note}>
        Pay once, grow your TikTok profile. No bots, real followers.
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    padding: "24px",
    fontFamily: "system-ui",
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
    marginBottom: "20px",
  },
  card: {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
    maxWidth: "360px",
    margin: "0 auto 16px",
  },
  price: {
    fontSize: "24px",
    fontWeight: "700",
    margin: "12px 0",
  },
  button: {
    padding: "12px 24px",
    background: "#22c55e",
    color: "#022c22",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
  note: {
    fontSize: "12px",
    opacity: 0.7,
    marginTop: "8px",
  },
};
