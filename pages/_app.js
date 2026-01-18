import BottomNav from "../components/BottomNav";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomNav />
    </>
  );
}
