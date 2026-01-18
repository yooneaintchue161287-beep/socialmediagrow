import Link from "next/link";

export default function Signup() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 Sign Up</h1>

      <input style={styles.input} type="text" placeholder="Username" />
      <input style={styles.input} type="email" placeholder="Email" />
      <input style={styles.input} type="password" placeholder="Password" />

      <button style={styles.button}>Sign Up</button>

      <p style={styles.text}>
        Already have an account?{" "}
        <Link href="/login" style={styles.link}>Login</Link>
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
