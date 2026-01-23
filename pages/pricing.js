import Head from "next/head"

export default function Pricing() {
  const handlePay = async () => {
    try {
      const res = await fetch("/api/paymongo", {
        method: "POST",
      })

      const data = await res.json()

      if (data.checkout_url) {
        window.location.href = data.checkout_url
      } else {
        alert("Payment failed. Please try again.")
      }
    } catch (err) {
      alert("Something went wrong.")
    }
  }

  return (
    <>
      <Head>
        <title>Pricing | GrowthAI Pro</title>
      </Head>

      <div style={styles.container}>
        <h1 style={styles.title}>Grow Faster with GrowthAI Pro</h1>
        <p style={styles.subtitle}>
          AI-powered growth tools for creators & businesses
        </p>

        <div style={styles.card}>
          <h2 style={styles.plan}>Pro Plan</h2>
          <p style={styles.price}>₱199 / one-time</p>

          <ul style={styles.list}>
            <li>✅ Unlimited campaigns</li>
            <li>✅ AI growth insights</li>
            <li>✅ Dashboard access</li>
            <li>✅ Priority support</li>
          </ul>

          <button style={styles.button} onClick={handlePay}>
            Start Growing
          </button>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
    marginBottom: "30px",
    textAlign: "center",
  },
  card: {
    background: "#020617",
    borderRadius: "12px",
    padding: "30px",
    width: "100%",
    maxWidth: "360px",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)",
    textAlign: "center",
  },
  plan: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  price: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  list: {
    textAlign: "left",
    marginBottom: "25px",
    lineHeight: "1.8",
  },
  button: {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "bold",
    background: "#22c55e",
    color: "#022c22",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
}
