export default function Dashboard() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dashboard</h1>

      <div style={styles.card}>
        <label style={styles.label}>TikTok Username</label>
        <input
          placeholder="@yourusername"
          style={styles.input}
        />

        <button style={styles.button}>
          Submit for Growth
        </button>

        <p style={styles.status}>
          Campaign Status: <strong>Pending</strong>
        </p>
      </div>
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
  },
  title: {
    fontSize: "22px",
    marginBottom: "16px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "420px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
    marginBottom: "12px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#22c55e",
    color: "#022c22",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
  status: {
    marginTop: "14px",
    fontSize: "14px",
    opacity: 0.85,
  },
};
