export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>GrowFast</h1>
        <nav style={styles.nav}>
          <a href="/dashboard" style={styles.link}>Dashboard</a>
          <a href="/pricing" style={styles.link}>Pricing</a>
          <a href="/login" style={styles.link}>Login</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.title}>Grow Real Followers</h2>
        <p style={styles.subtitle}>AI-powered promotion for TikTok, Instagram & Facebook</p>
        <a href="/pricing">
          <button style={styles.primaryButton}>Start Growing</button>
        </a>
      </section>

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

const styles = {
  page: { minHeight: "100vh", background: "#0f172a", color: "#e5e7eb", fontFamily: "system-ui, sans-serif" },
  header: { padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { fontSize: 20, fontWeight: 700 },
  nav: { display: "flex", gap: "14px", fontSize: 14, opacity: 0.85 },
  link: { color: "#e5e7eb", textDecoration: "none" },
  hero: { padding: "60px 20px", textAlign: "center" },
  title: { fontSize: 32, fontWeight: 800, marginBottom: 12 },
  subtitle: { fontSize: 16, opacity: 0.85, maxWidth: 420, margin: "0 auto 28px" },
  primaryButton: { padding: "14px 28px", fontSize: 16, fontWeight: 600, borderRadius: 10, border: "none", background: "#22c55e", color: "#022c22", cursor: "pointer" },
  features: { padding: 20, display: "grid", gridTemplateColumns: "1fr", gap: 16 },
  card: { background: "#020617", border: "1px solid #1e293b", borderRadius: 14, padding: 20 },
};
