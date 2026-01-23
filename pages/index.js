import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()

  return (
    <div style={styles.page}>
      <h1>GrowFast</h1>
      <p>AI-powered promotion for TikTok, Instagram & Facebook</p>

      <button
        style={styles.button}
        onClick={() => router.push("/pricing")}
      >
        Start Growing
      </button>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    padding: "14px 30px",
    fontSize: 16,
    background: "#22c55e",
    border: "none",
    borderRadius: 8,
    cursor: "pointer"
  }
}
