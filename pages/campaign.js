export default function Campaign() {
  return (
    <div style={styles.page}>
      <h1 style={styles.logo}>GrowFast</h1>

      <h2 style={styles.title}>Create Campaign</h2>

      <label style={styles.label}>Platform</label>
      <select style={styles.input}>
        <option>TikTok</option>
        <option>Instagram</option>
        <option>Facebook</option>
      </select>

      <label style={styles.label}>Post / Profile Link</label>
      <input
        style={styles.input}
        placeholder="https://tiktok.com/@username/video/..."
      />

      <label style={styles.label}>Goal</label>
      <select style={styles.input}>
        <option>Followers</option>
        <option>Likes</option>
        <option>Views</option>
      </select>

      <button style={styles.primary}>Start Campaign</button>

      <p style={styles.note}>
        AI will optimize delivery automatically
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#020617",
    color: "#e5e7eb",
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
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "16px",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  primary: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    background: "#22c55e",
    color: "#022c22",
    fontWeight: "700",
    fontSize: "16px",
  },
  note: {
    marginTop: "16px",
    textAlign: "center",
    fontSize: "13px",
    opacity: 0.7,
  },
};
