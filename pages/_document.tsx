import { Head, Html, Main, NextScript } from "next/document";
import PlausibleProvider from "next-plausible";

export default function Document() {
  return (
    <Html lang="en" className="bg-white">
      <Head>
        <PlausibleProvider domain="sofieramstad.no" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="
If you have any questions or would like to discuss a project or possible collaborations, please do not hesitate to contact me by email or phone."
        />
        <meta property="og:url" content="https://sofieramstad.no/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sofie Ramstad" />
        <meta
          property="og:description"
          content="
If you have any questions or would like to discuss a project or possible collaborations, please do not hesitate to contact me by email or phone."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/v4q3lb9i/production/fa4b0bc767862e987400caa400ab03114ca9e0d5-4338x2999.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sofieramstad.no" />
        <meta property="twitter:url" content="https://sofieramstad.no/" />
        <meta name="twitter:title" content="Sofie Ramstad" />
        <meta
          name="twitter:description"
          content="
If you have any questions or would like to discuss a project or possible collaborations, please do not hesitate to contact me by email or phone."
        />
        <meta
          name="twitter:image"
          content="https://cdn.sanity.io/images/v4q3lb9i/production/fa4b0bc767862e987400caa400ab03114ca9e0d5-4338x2999.jpg"
        />
      </Head>
      <body className="text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
