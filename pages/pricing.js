import React from "react"

export default function Pricing() {
  // Function to handle payment
  const handlePay = async () => {
    try {
      const res = await fetch("/api/paymongo", { method: "POST" })
      const data = await res.json()

      if (data.url) {
        // Redirect user to PayMongo checkout page
        window.location.href = data.url
      } else {
        alert("Payment failed")
      }
    } catch (err) {
      console.error(err)
      alert("Payment error")
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>GrowFast</h1>
      </header>

      <main style={styles.main}>
        <h2 style={styles.title}>Choose Your Plan</h2>

        <div style={styles.card}>
          <h3>Starter Plan</h3>
          <p>Grow real followers automatically.</p>
          <p>₱499 / month</p>
          <button style={styles.button} onClick={handlePay}>
            Start Growing
          </button>
        </div>

        <div style={styles.card}>
          <h3>Pro Plan</h3>
          <p>Advanced targeting + analytics.</p>
          <p>₱999 / month</p>
          <button style={styles.button} onClick={handlePay}>
            Start Growing
          </button>
        </div>
      </main>
    </div>
  )
}

/* ---------- Styles ---------- */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0f172a, #020617)",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
  },
  header: {
    padding: "16px 20px",
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid #1e293b",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
  },
  main: {
    padding: "40px 20px",
    display: "grid",
    gap: "24px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    textAlign: "center",
  },
  button: {
    marginTop: "16px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    border: "none",
    background: "#22c55e",
    color: "#022c22",
    cursor: "pointer",
  },
}
