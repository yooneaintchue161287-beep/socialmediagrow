export default function Login() {
  const login = () => {
    localStorage.setItem("auth", "true")
    window.location.href = "/dashboard"
  }

  return (
    <div style={styles.page}>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
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
