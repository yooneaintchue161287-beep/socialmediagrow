export default function Login() {
  return (
    <div style={styles.page}>
      <h1>Login</h1>
      <input placeholder="Email" style={styles.input} />
      <input placeholder="Password" type="password" style={styles.input} />
      <button style={styles.button}>Login</button>
      <p>
        No account? <a href="/signup" style={styles.link}>Sign Up</a>
      </p>
    </div>
  );
}

const styles = {
  page: { padding: 20, textAlign: "center", minHeight: "100vh", background: "#0f172a", color: "#e5e7eb", fontFamily: "system-ui, sans-serif" },
  input: { display: "block", margin: "10px auto", padding: 10, width: "80%", borderRadius: 8, border: "1px solid #ccc" },
  button: { padding: "14px 28px", fontSize: 16, borderRadius: 8, background: "#22c55e", border: "none", color: "#022c22", cursor: "pointer" },
  link: { color: "#22c55e", textDecoration: "none" },
};
