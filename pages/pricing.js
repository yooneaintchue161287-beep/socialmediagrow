import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      credits: "1,000 credits / month",
      features: [
        "Grow real followers",
        "1 active campaign",
        "Basic AI targeting",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      credits: "5,000 credits / month",
      features: [
        "Faster growth",
        "5 active campaigns",
        "Advanced AI targeting",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "$79",
      credits: "20,000 credits / month",
      features: [
        "Maximum growth",
        "Unlimited campaigns",
        "Smart AI optimization",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pricing Plans</h1>
      <p style={styles.subtitle}>
        Choose a plan that fits your growth goals
      </p>

      <div style={styles.grid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              border: plan.popular ? "2px solid #00e5ff" : "1px solid #222",
            }}
          >
            {plan.popular && <div style={styles.badge}>Most Popular</div>}

            <h2 style={styles.planName}>{plan.name}</h2>
            <p style={styles.price}>{plan.price}/month</p>
            <p style={styles.credits}>{plan.credits}</p>

            <ul style={styles.list}>
              {plan.features.map((feature, i) => (
                <li key={i} style={styles.listItem}>
                  ✔ {feature}
                </li>
              ))}
            </ul>

            <Link href="/dashboard">
              <button style={styles.button}>Get Started</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0b0b0f",
    color: "#fff",
    padding: "40px 16px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "#111",
    borderRadius: "12px",
    padding: "24px",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: "-10px",
    right: "10px",
    background: "#00e5ff",
    color: "#000",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  planName: {
    fontSize: "22px",
    marginBottom: "8px",
  },
  price: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  credits: {
    color: "#00e5ff",
    marginBottom: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "14px",
  },
  button: {
    background: "#00e5ff",
    color: "#000",
    border: "none",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
