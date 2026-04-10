import { Head } from 'minista/head'

const revealScript = `
  document.addEventListener('DOMContentLoaded', function () {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      obs.observe(el);
    });
  });
`

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
      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </>
  )
}
