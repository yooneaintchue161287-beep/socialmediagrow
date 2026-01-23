export default function Dashboard() {
  const runAI = () => {
    alert("🤖 AI Growth Engine running...\nTargeting real users now.");
  };

  return (
    <div style={styles.page}>
      <h1>Dashboard</h1>

      <div style={styles.card}>
        <h2>AI Growth Engine</h2>
        <p>
          Our AI analyzes your niche, hashtags, and posting time to grow real
          followers.
        </p>
        <button onClick={runAI} style={styles.button}>
          Run AI Growth
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
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
  },
  button: {
    marginTop: "16px",
    padding: "12px 24px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
