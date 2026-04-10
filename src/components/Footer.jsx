import { Globe, Share2, AtSign, Rss } from 'lucide-react'
import Logo from './Logo'

const quickLinks = [
  { label: 'Главная',          href: '#home' },
  { label: 'О докторе Хамзабеке',   href: '#about' },
  { label: 'Наши услуги',      href: '#services' },
  { label: 'Отзывы пациентов', href: '#testimonials' },
  { label: 'Запись на приём',  href: '#appointment' },
]

const serviceLinks = [
  { label: 'Первичная помощь',     href: '#services' },
  { label: 'Профилактика',         href: '#services' },
  { label: 'Хронические болезни',  href: '#services' },
  { label: 'Женское здоровье',     href: '#services' },
  { label: 'Телемедицина',         href: '#services' },
]

const socials = [
  { Icon: Globe,  label: 'Сайт',     href: '#' },
  { Icon: Share2, label: 'Соцсети',  href: '#' },
  { Icon: AtSign, label: 'Email',    href: '#' },
  { Icon: Rss,    label: 'RSS',      href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">

          <div>
            <div className="footer__logo">
              <Logo size={30} color="#fff" />
              <span>Биржан Хамзабек</span>
            </div>
            <p className="footer__brand-desc">
              Сертифицированный терапевт, преданный оказанию внимательной,
              доказательной медицинской помощи для всей семьи.
            </p>
            <div className="footer__socials">
              {socials.map(({ Icon, label, href }) => (
                <a key={label} href={href} className="footer__social-link" aria-label={label}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Навигация</div>
            <ul className="footer__links">
              {quickLinks.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer__link">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Услуги</div>
            <ul className="footer__links">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer__link">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Часы работы</div>
            <p className="footer__hours-item"><span>Пн – Пт:</span> 9:00 – 18:00</p>
            <p className="footer__hours-item"><span>Суббота:</span> 9:00 – 14:00</p>
            <p className="footer__hours-item"><span>Воскресенье:</span> Выходной</p>
            <p className="footer__emergency">Экстренная помощь: 24/7</p>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2025 Биржан Хамзабек. Все права защищены.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Политика конфиденциальности</a>
            <a href="#" className="footer__legal-link">Условия использования</a>
            <a href="#" className="footer__legal-link">Соответствие HIPAA</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
