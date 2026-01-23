import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Success() {
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem("paid", "true")
    router.push("/dashboard")
  }, [])

  return <p>Payment successful… redirecting</p>
}
