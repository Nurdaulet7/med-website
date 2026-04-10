import { Head } from 'minista/head'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head htmlAttributes={{ lang: 'ru' }} title={title || 'Биржан Хамзабек'}>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  )
}
