export default function Home() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>GrowFast</h2>
        <nav>
          <a href="/pricing" style={{ marginRight: 12 }}>Pricing</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main style={{ marginTop: 60 }}>
        <h1>Grow Real Followers</h1>
        <p>AI-powered promotion for TikTok, Instagram & Facebook</p>

        <a href="/pricing">
          <button style={{ marginTop: 20, padding: "12px 20px" }}>
            Start Growing
          </button>
        </a>
      </main>
    </div>
  );
}
