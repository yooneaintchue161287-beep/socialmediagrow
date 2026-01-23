export default function Signup() {
  const signup = () => {
    localStorage.setItem("auth", "true")
    window.location.href = "/dashboard"
  }

  return (
    <div style={styles.page}>
      <h1>Sign Up</h1>
      <button onClick={signup}>Create Account</button>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}
