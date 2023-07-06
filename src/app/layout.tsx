import Head from 'next/head'
import './globals.css'
import Header from './components/header/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Um blog pessoal para armazenar e organizar todas as minhas anotações sobre meus estudos em TI" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <title>Estudograma</title>
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
