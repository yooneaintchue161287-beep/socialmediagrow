import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

export default function Dashboard() {
  const router = useRouter()
  const [platform, setPlatform] = useState("TikTok")
  const [niche, setNiche] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const paid = localStorage.getItem("paid")
    if (paid !== "true") router.push("/pricing")
  }, [router])

  const generateCampaign = async () => {
    if (!niche) return alert("Enter a niche")

    setLoading(true)
    setResult("")

    const res = await fetch("/api/generate")
    const data = await res.json()

    setResult(data.text)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Dashboard | GrowthAI Pro</title>
      </Head>

      <div style={styles.container}>
        <h1 style={styles.title}>🚀 Growth AI Dashboard</h1>

        <div style={styles.card}>
          <select
            style={styles.input}
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option>TikTok</option>
            <option>Instagram</option>
            <option>Facebook</option>
          </select>

          <input
            style={styles.input}
            placeholder="Your niche (e.g. Fitness)"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
          />

          <button style={styles.button} onClick={generateCampaign}>
            {loading ? "Generating..." : "Generate Campaign"}
          </button>

          {result && (
            <pre style={styles.result}>{result}</pre>
          )}
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
    padding: "30px",
  },
  title: {
    fontSize: "26px",
    marginBottom: "20px",
  },
  card: {
    background: "#0f172a",
    padding: "24px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#22c55e",
    color: "#022c22",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  result: {
    marginTop: "16px",
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    opacity: 0.9,
  },
}
