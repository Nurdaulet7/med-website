import { Calendar } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Главная',   href: '#home' },
  { label: 'О враче',   href: '#about' },
  { label: 'Услуги',    href: '#services' },
  { label: 'Отзывы',    href: '#testimonials' },
  { label: 'Контакты',  href: '#appointment' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#home" className="header__logo">
            <Logo size={34} />
            <span>Биржан Хамзабек</span>
          </a>
          <nav className="header__nav">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="header__nav-link">{label}</a>
            ))}
          </nav>
          <div className="header__cta">
            <a href="#appointment" className="btn btn--primary">
              <Calendar size={16} />
              Записаться
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
