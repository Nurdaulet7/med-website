import '../assets/styles/global.scss'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Benefits from '../components/Benefits'
import Appointment from '../components/Appointment'
import Footer from '../components/Footer'

export const frontmatter = {
  title: 'Биржан Хамзабек — Ваше здоровье, наш приоритет',
  description:
    'Сертифицированный терапевт, оказывающий внимательную, доказательную медицинскую помощь в Москве.',
}

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Benefits />
        <Appointment />
      </main>
      <Footer />
    </>
  )
}
