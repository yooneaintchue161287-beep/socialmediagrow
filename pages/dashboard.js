export default function Dashboard() {
  return (
    <div style={styles.page}>
      <h1>Dashboard</h1>
      <p>Welcome! Your AI promotion campaign will start here.</p>
      <a href="/pricing">
        <button style={styles.button}>Upgrade Plan</button>
      </a>
    </div>
  );
}

const styles = {
  page: { padding: 20, textAlign: "center", minHeight: "100vh", background: "#0f172a", color: "#e5e7eb", fontFamily: "system-ui, sans-serif" },
  button: { padding: "14px 28px", fontSize: 16, borderRadius: 8, background: "#22c55e", border: "none", color: "#022c22", cursor: "pointer" },
};
