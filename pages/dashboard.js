import { useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const runAI = async () => {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/run-ai");
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setResult("❌ AI failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📊 AI Growth Dashboard</h1>

      <button style={styles.button} onClick={runAI} disabled={loading}>
        {loading ? "Running AI..." : "Run AI Growth"}
      </button>

      {result && (
        <div style={styles.card}>
          <h3>🚀 AI Growth Plan</h3>
          <p style={styles.result}>{result}</p>
        </div>
      )}
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
    fontSize: "24px",
    marginBottom: "20px",
  },
  button: {
    padding: "14px 22px",
    background: "#22c55e",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },
  card: {
    marginTop: "24px",
    padding: "20px",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "12px",
  },
  result: {
    whiteSpace: "pre-line",
    marginTop: "10px",
    opacity: 0.9,
  },
};
