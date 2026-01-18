import Link from "next/link";

export default function BottomNav() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>Home</Link>
      <Link href="/dashboard" style={styles.link}>Dashboard</Link>
      <Link href="/pricing" style={styles.link}>Pricing</Link>
      <Link href="/profile" style={styles.link}>Profile</Link>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "56px",
    background: "#000",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#fff",
    borderTop: "1px solid #222",
    zIndex: 1000,
  },
  link: {
    color: "#00e5ff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
  },
};
