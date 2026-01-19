export default function Pricing() {

  const handlePay = () => {
  alert("Payment flow will start here");
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        padding: "40px 20px",
        fontFamily: "system-ui",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "12px" }}>Pricing</h1>
      <p style={{ marginBottom: "20px" }}>
        ₱499 / campaign — TikTok Growth
      </p>

      <button
        type="button"
        onClick={handlePay}
        style={{
          padding: "14px 28px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          background: "#22c55e",
          cursor: "pointer",
          color: "#022c22",
          fontWeight: "600",
        }}
      >
        Start Growing
      </button>
    </div>
  );
}
