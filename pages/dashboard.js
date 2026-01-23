import { useState } from "react"

export default function Dashboard() {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = () => {
    const isPaid = localStorage.getItem("paid") === "true"

    const today = new Date().toISOString().slice(0, 10)
    const savedDate = localStorage.getItem("aiDate")
    let count = Number(localStorage.getItem("aiCount") || 0)

    if (savedDate !== today) {
      count = 0
      localStorage.setItem("aiDate", today)
    }

    if (!isPaid && count >= 3) {
      alert("Free limit reached. Upgrade to continue.")
      return
    }

    localStorage.setItem("aiCount", count + 1)

    setLoading(true)
    setTimeout(() => {
      setResult("AI Strategy: Post daily reels, engage comments, collaborate.")
      setLoading(false)
    }, 1000)
  }

  return (
    <div style={styles.page}>
      <h1>Dashboard</h1>

      <button onClick={handleGenerate} style={styles.button}>
        Generate AI Campaign
      </button>

      {loading && <p>Generating...</p>}
      {result && <pre>{result}</pre>}

      <p style={{ opacity: 0.7 }}>Free users: 3/day</p>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#fff",
    padding: 40
  },
  button: {
    padding: "12px 20px",
    background: "#22c55e",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  }
}
