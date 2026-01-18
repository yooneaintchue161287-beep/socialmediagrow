import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Dashboard</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Followers Gained</h3>
          <p style={styles.number}>+1,284</p>
        </div>

        <div style={styles.card}>
          <h3>Active Campaigns</h3>
          <p style={styles.number}>3</p>
        </div>

        <div style={styles.card}>
          <h3>Estimated Reach</h3>
          <p style={styles.number}>48,900</p>
        </div>

        <div style={styles.cardHighlight}>
          <h3>🚀 Upgrade Plan</h3>
          <p>Boost your growth faster</p>
          <Link href="/pricing">
  <button style={styles.button}>Upgrade</button>
</Link>

        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px",
    background: "#0b0b0b",
    minHeight: "100vh",
    color: "#fff",
  },
  title: {
    marginBottom: "20px",
    color: "#00e5ff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "#151515",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #222",
  },
  cardHighlight: {
    background: "linear-gradient(135deg, #00e5ff, #0066ff)",
    padding: "16px",
    borderRadius: "12px",
    color: "#000",
  },
  number: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "8px",
  },
  button: {
    marginTop: "12px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#000",
    color: "#00e5ff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
