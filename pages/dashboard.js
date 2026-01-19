import { useState } from "react";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert("Please enter your TikTok username.");
      return;
    }

    // For MVP, just update status
    setStatus("Submitted! Growth campaign in progress...");

    // Clear input
    setUsername("");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dashboard</h1>

      <p style={styles.subtitle}>
        Enter your TikTok username to start your growth campaign.
      </p>

      <form onSubmit={handleSubmit} style={styles.card}>
        <label style={styles.label}>TikTok Username</label>
        <input
          type="text"
          placeholder="@yourusername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Submit for Growth
        </button>

        <p style={styles.status}>
          Campaign Status: <strong>{status}</strong>
        </p>
      </form>
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
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
    marginBottom: "20px",
  },
  card: {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
    maxWidth: "360px",
    margin: "0 auto",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "6px",
    textAlign: "left",
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
    marginBottom: "12px",
  },
  status: {
    fontSize: "14px",
    opacity: 0.85,
  },
};
