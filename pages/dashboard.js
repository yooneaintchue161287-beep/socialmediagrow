import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((user) => {
        if (user.subscription !== "active") {
          router.push("/pricing");
        } else {
          setLoading(false);
        }
      });
  }, []);

  if (loading) return <p style={{ color: "#fff" }}>Checking subscription...</p>;

  return (
    <div style={styles.page}>
      <h1>AI Growth Dashboard</h1>

      <div style={styles.card}>
        <h2>🤖 AI Growth Engine</h2>
        <p>Real audience targeting in progress</p>
        <button style={styles.button}>Run AI Growth</button>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#020617", color: "#fff", padding: 40 },
  card: { border: "1px solid #1e293b", borderRadius: 12, padding: 24 },
  button: { marginTop: 16, padding: 12, background: "#22c55e", border: 0 },
};
