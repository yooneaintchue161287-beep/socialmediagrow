export default function Signup() {
  return (
    <div style={styles.page}>
      <h1 style={styles.logo}>GrowFast</h1>

      <h2 style={styles.title}>Create account</h2>

      <input style={styles.input} placeholder="Email" />
      <input style={styles.input} type="password" placeholder="Password" />

      <button style={styles.primary}>Sign up</button>

      <p style={styles.text}>
        Already have an account? <a href="/login" style={styles.link}>Log in</a>
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "system-ui",
  },
  logo: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  primary: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    background: "#22c55e",
    color: "#022c22",
    fontWeight: "600",
    marginTop: "10px",
  },
  text: {
    marginTop: "16px",
    textAlign: "center",
    fontSize: "14px",
  },
  link: {
    color: "#22c55e",
    textDecoration: "none",
  },
};
