export default function Dashboard() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>GrowFast</h1>
      </header>

      <section style={styles.welcome}>
        <h2>Dashboard</h2>
        <p>Welcome back 👋</p>
      </section>

      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>Total Campaigns</h3>
          <p style={styles.number}>0</p>
        </div>

        <div style={styles.card}>
          <h3>Followers Gained</h3>
          <p style={styles.number}>0</p>
        </div>

        <div style={styles.card}>
          <h3>Credits Balance</h3>
          <p style={styles.number}>0</p>
        </div>
      </section>

      <section style={styles.actions}>
        <button style={styles.primary}>Start New Campaign</button>
        <button style={styles.secondary}>View Campaigns</button>
      </section>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system",
    paddingBottom: "40px",
  },

  header: {
    padding: "16px 20px",
    borderBottom: "1px solid #1e293b",
  },

  logo: {
    fontSize: "18px",
    fontWeight: "700",
  },

  welcome: {
    padding: "20px",
  },

  cards: {
    padding: "0 20px",
    display: "grid",
    gap: "14px",
  },

  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "18px",
  },

  number: {
    fontSize: "28px",
    fontWeight: "800",
    marginTop: "6px",
  },

  actions: {
    padding: "20px",
    display: "grid",
    gap: "12px",
  },

  primary: {
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    border: "none",
    background: "#22c55e",
    color: "#022c22",
    cursor: "pointer",
  },

  secondary: {
    padding: "14px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    background: "transparent",
    color: "#e5e7eb",
    cursor: "pointer",
  },
};
