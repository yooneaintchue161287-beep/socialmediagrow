import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem("user")

    if (!user) {
      router.replace("/login")
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>

      <button
        onClick={() => {
          localStorage.removeItem("user")
          router.push("/login")
        }}
      >
        Logout
      </button>
    </div>
  )
}
