import "styles/global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Sofie Ramstad</title>
      <Component {...pageProps} />
    </>
  );
}
