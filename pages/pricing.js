export default function Pricing() {
  const handlePay = async () => {
    alert("Payment successful (TEST MODE)")
    localStorage.setItem("paid", "true")
    window.location.href = "/dashboard"
  }

  return (
    <div style={styles.page}>
      <h1>Pricing</h1>

      <div style={styles.card}>
        <h2>Free</h2>
        <p>3 AI generations / day</p>
      </div>

      <div style={styles.card}>
        <h2>Pro</h2>
        <p>Unlimited AI</p>
        <button style={styles.button} onClick={handlePay}>
          Upgrade (Test)
        </button>
      </div>
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
  card: {
    border: "1px solid #1e293b",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  button: {
    padding: "10px 20px",
    background: "#22c55e",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  }
}
