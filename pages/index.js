const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
    fontFamily: "system-ui",
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    textAlign: "center",
    marginTop: "80px",
  },
};

export default function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>GrowFast</h1>
    </div>
  );
}
