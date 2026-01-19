export default function Pricing() {

  const handlePay = async () => {
  alert("Button clicked!");
};

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Pricing</h1>
      <p>Grow your social media with real followers</p>

      <h2>₱499 / month</h2>

      <button
        onClick={handlePay}
        style={{
          padding: "14px 28px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "none",
          background: "#22c55e",
          cursor: "pointer",
        }}
      >
        Start Growing
      </button>
    </div>
  );
}
