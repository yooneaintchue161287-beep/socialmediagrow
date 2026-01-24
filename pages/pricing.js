export default function Pricing() {
  const pay = async () => {
    const res = await fetch("/api/create-subscription");
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div style={styles.page}>
      <h1>GrowFast Pro</h1>
      <p>₱199 / month</p>
      <button onClick={pay} style={styles.button}>
        Subscribe Now
      </button>
    </div>
  );
}

const styles = {
  page: { background: "#020617", color: "#fff", padding: 40 },
  button: { padding: 14, background: "#22c55e", border: 0 },
};
