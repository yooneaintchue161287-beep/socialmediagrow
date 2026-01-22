export default function Pricing() {
  const handleSelectPlan = (plan) => {
    alert(`You selected the ${plan} plan`);
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Pricing</h1>
      <p>Choose a plan to grow your social media</p>

      <div style={{ marginTop: 30 }}>

        {/* Starter Plan */}
        <div style={cardStyle}>
          <h3>Starter</h3>
          <p>$9 / month</p>
          <button
            style={buttonStyle}
            onClick={() => handleSelectPlan("Starter")}
          >
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div style={cardStyle}>
          <h3>Pro</h3>
          <p>$29 / month</p>
          <button
            style={buttonStyle}
            onClick={() => handleSelectPlan("Pro")}
          >
            Start Pro
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const cardStyle = {
  border: "1px solid #ddd",
  padding: 20,
  borderRadius: 10,
  marginBottom: 20,
  maxWidth: 300,
};

const buttonStyle = {
  marginTop: 10,
  padding: "10px 16px",
  cursor: "pointer",
};
