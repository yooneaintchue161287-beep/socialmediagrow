import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/pricing")}
      style={styles.primaryButton}
    >
      Start Growing
    </button>
  );
}
