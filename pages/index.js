import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Grow Real Followers<br />Cheaper Than Ads
        </h1>

        <p className="text-gray-400 mb-6">
          AI-powered promotion for TikTok, Instagram & Facebook
        </p>

        <a
          href="/dashboard"
          className="block bg-cyan-500 text-black py-3 rounded-xl font-bold"
        >
          Start Growing
        </a>
      </div>
    </div>
  );
}
