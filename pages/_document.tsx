import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(home) {
  return (
    <Html lang="en" className="bg-white">
      <Head>
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
          content="Norwegian Photographer with a documentary approach to Photography."
        />
        <meta property="og:url" content="https://sofieramstad.no/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sofie Ramstad Arkitekter" />
        <meta
          property="og:description"
          content="Norwegian Photographer with a documentary approach to Photography."
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sofieramstad.no" />
        <meta property="twitter:url" content="https://sofieramstad.no/" />
        <meta name="twitter:title" content="Sofie Ramstad Arkitekter" />
        <meta
          name="twitter:description"
          content="Norwegian Photographer with a documentary approach to Photography."
        />
        <meta name="twitter:image" content="" />
      </Head>
      <body className="text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
