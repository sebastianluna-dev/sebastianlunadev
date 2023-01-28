import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Raleway:wght@200;400;600&display=swap" rel="stylesheet"/>
      </Head>
      <body className="font-light scroll-smooth" style={{backgroundColor: "#07111A"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
