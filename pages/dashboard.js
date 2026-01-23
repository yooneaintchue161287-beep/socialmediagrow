import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const paid = localStorage.getItem("paid")
    if (paid !== "true") {
      router.push("/pricing")
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Dashboard | GrowthAI Pro</title>
      </Head>

      <div style={styles.container}>
        <h1 style={styles.title}>🚀 Welcome to Your Dashboard</h1>
        <p style={styles.subtitle}>
          Your GrowthAI Pro account is active.
        </p>

        <div style={styles.card}>
          <p>✅ Payment verified</p>
          <p>📊 Campaign system coming next</p>
          <p>🤖 AI tools unlocked</p>

          <button
            style={styles.logout}
            onClick={() => {
              localStorage.removeItem("paid")
              router.push("/pricing")
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "25px",
  },
  card: {
    background: "#0f172a",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "360px",
    textAlign: "center",
  },
  logout: {
    marginTop: "20px",
    padding: "10px",
    width: "100%",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
}
