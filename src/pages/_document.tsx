import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
      <body className="min-h-screen bg-navy font-outfit text-silver">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
