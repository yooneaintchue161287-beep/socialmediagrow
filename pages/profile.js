export default function Profile() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👤 Profile</h1>

      <div style={styles.card}>
        <p><strong>Username:</strong> demo_user</p>
        <p><strong>Plan:</strong> Free</p>
        <p><strong>Campaigns:</strong> 1 / 1</p>
      </div>

      <button style={styles.button}>Upgrade Plan</button>
      <button style={styles.logout}>Log Out</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0b0b0b",
    minHeight: "100vh",
    color: "#fff",
  },
  title: {
    color: "#00e5ff",
    marginBottom: "16px",
  },
  card: {
    background: "#151515",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #222",
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#00e5ff",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  logout: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "transparent",
    color: "#fff",
  },
};
