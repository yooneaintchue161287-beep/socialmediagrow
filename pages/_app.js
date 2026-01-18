import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <nav style={styles.nav}>
        <Link href="/">
          <span style={styles.item}>🏠 Home</span>
        </Link>
        <Link href="/dashboard">
          <span style={styles.item}>📊 Dashboard</span>
        </Link>
        <Link href="/pricing">
          <span style={styles.item}>💳 Pricing</span>
        </Link>
        <Link href="/profile">
          <span style={styles.item}>👤 Profile</span>
        </Link>
      </nav>
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "60px",
    background: "#0b0b0b",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: "1px solid #222",
    zIndex: 1000,
  },
  item: {
    color: "#00e5ff",
    fontSize: "14px",
    cursor: "pointer",
  },
};
