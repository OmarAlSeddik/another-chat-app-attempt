import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
      <body className="text-silver select-none bg-primary4 font-outfit text-medium text-text2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
