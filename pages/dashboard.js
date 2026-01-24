import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
const runAI = async () => {
  const res = await fetch("/api/run-ai");
  const data = await res.json();
  alert(data.message);
};

  return (
    <div style={styles.page}>
      <h1>AI Growth Dashboard</h1>

      <div style={styles.card}>
        <h2>🤖 AI Growth Engine</h2>
        <p>Real audience targeting in progress</p>
        <button onClick={runAI} style={styles.button}>
  Run AI Growth
</button>

      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#020617", color: "#fff", padding: 40 },
  card: { border: "1px solid #1e293b", borderRadius: 12, padding: 24 },
  button: { marginTop: 16, padding: 12, background: "#22c55e", border: 0 },
};
