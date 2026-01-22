export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>GrowFast</h1>
        <nav style={styles.nav}>
          <a href="/pricing" style={styles.link}>Pricing</a>
          <a href="/login" style={styles.link}>Login</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.title}>Grow Real Followers</h2>
        <p style={styles.subtitle}>
          AI-powered promotion for TikTok, Instagram & Facebook
        </p>
        <a href="/pricing" style={styles.primaryButton}>
          Start Growing
        </a>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    fontFamily: "system-ui",
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
    gap: "16px",
  },
  link: {
    color: "#e5e7eb",
    textDecoration: "none",
  },
  hero: {
    padding: "80px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "12px",
  },
  subtitle: {
    opacity: 0.85,
    marginBottom: "24px",
  },
  primaryButton: {
    display: "inline-block",
    padding: "14px 28px",
    background: "#22c55e",
    color: "#022c22",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
  },
};
