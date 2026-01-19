export default function Pricing() {
  const handlePay = () => {
    alert("Pricing button clicked!");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Pricing</h1>

      <button
        onClick={handlePay}
        style={{
          padding: "14px 24px",
          fontSize: 16,
          background: "#22c55e",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Start Growing
      </button>
    </div>
  );
}
