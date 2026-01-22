export default function Pricing() {
  const handlePay = (plan) => {
    alert(`You selected the ${plan} plan`);
    // Later this will call /api/paymongo
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>GrowFast</h1>
        <a href="/" style={styles.link}>Home</a>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.title}>Simple Pricing</h2>
        <p style={styles.subtitle}>
          Choose a plan to start growing real followers
        </p>
      </section>

      <section style={styles.plans}>
        {/* BASIC */}
        <div style={styles.card}>
          <h3>Starter</h3>
          <p style={styles.price}>₱499</p>
          <ul style={styles.list}>
            <li>✔ 1 Campaign</li>
            <li>✔ Basic Growth</li>
            <li>✔ Email Support</li>
          </ul>
          <button
            style={styles.button}
            onClick={() => handlePay("Starter")}
          >
            Start Growing
          </button>
        </div>

        {/* PRO */}
        <div style={{ ...styles.card, borderColor: "#22c55e" }}>
          <h3>Pro</h3>
          <p style={styles.price}>₱1,499</p>
          <ul style={styles.list}>
            <li>✔ Unlimited Campaigns</li>
            <li>✔ Faster AI Growth</li>
            <li>✔ Priority Support</li>
          </ul>
          <button
            style={{ ...styles.button, background: "#22c55e" }}
            onClick={() => handlePay("Pro")}
          >
            Start Growing
          </button>
        </div>
      </section>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0f172a, #020617)",
    color: "#e5e7eb",
    fontFamily: "system-ui",
    paddingBottom: "40px",
  },

  header: {
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "700",
  },

  link: {
    color: "#e5e7eb",
    textDecoration: "none",
    opacity: 0.85,
  },

  hero: {
    textAlign: "center",
    padding: "40px 20px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "800",
  },

  subtitle: {
    opacity: 0.8,
    marginTop: "10px",
  },

  plans: {
    display: "grid",
    gap: "20px",
    padding: "20px",
  },

  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    textAlign: "center",
  },

  price: {
    fontSize: "28px",
    fontWeight: "700",
    margin: "12px 0",
  },

  list: {
    listStyle: "none",
    padding: 0,
    opacity: 0.9,
    marginBottom: "20px",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#334155",
    color: "#e5e7eb",
    fontWeight: "600",
    cursor: "pointer",
  },
};
