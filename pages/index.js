export default function Home() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>GrowFast</h1>
        <nav style={styles.nav}>
  <a href="/dashboard" style={styles.link}>Dashboard</a>
  <span>Followers</span>
  <span>Pricing</span>
</nav>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <h2 style={styles.title}>Grow Real Followers</h2>
        <p style={styles.subtitle}>
          AI-powered promotion for TikTok, Instagram & Facebook
        </p>

        <button style={styles.primaryButton}>Start Growing</button>
      </section>

      {/* Features */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>🚀 Faster Growth</h3>
          <p>Reach real users organically, not bots.</p>
        </div>

        <div style={styles.card}>
          <h3>💰 Cheaper Than Ads</h3>
          <p>Spend less than Facebook & TikTok ads.</p>
        </div>

        <div style={styles.card}>
          <h3>🤖 AI Powered</h3>
          <p>Our AI targets the right audience for you.</p>
        </div>
      </section>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0f172a, #020617)",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
  },

  header: {
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "700",
  },

  nav: {
    display: "flex",
    gap: "14px",
    fontSize: "14px",
    opacity: 0.85,
  },

  hero: {
    padding: "60px 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "12px",
  },

  subtitle: {
    fontSize: "16px",
    opacity: 0.85,
    maxWidth: "420px",
    margin: "0 auto 28px",
  },

  primaryButton: {
    padding: "14px 28px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    border: "none",
    background: "#22c55e",
    color: "#022c22",
    cursor: "pointer",
  },

  features: {
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
  },

  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "20px",
  },
};
