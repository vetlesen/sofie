import "styles/global.css";
import PlausibleProvider from "next-plausible";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <PlausibleProvider domain="sofieramstad.no" />
      </head>
      <title>Sofie Ramstad</title>
      <Component {...pageProps} />
    </>
  );
}
