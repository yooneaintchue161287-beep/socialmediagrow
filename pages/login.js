import Link from "next/link";

export default function Login() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔐 Login</h1>

      <input style={styles.input} type="text" placeholder="Username" />
      <input style={styles.input} type="password" placeholder="Password" />

      <button style={styles.button}>Login</button>

      <p style={styles.text}>
        Don’t have an account?{" "}
        <Link href="/signup" style={styles.link}>Sign Up</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    minHeight: "100vh",
    background: "#0b0b0b",
    color: "#fff",
  },
  title: {
    color: "#00e5ff",
    fontSize: "24px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#151515",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#00e5ff",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "12px",
  },
  text: {
    fontSize: "14px",
    color: "#aaa",
  },
  link: {
    color: "#00e5ff",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
