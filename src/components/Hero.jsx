import { Calendar, ChevronRight } from 'lucide-react'
import heroDoctorImg from '../assets/images/hero-doctor.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content animate-fade-up">
            <h1 className="hero__title">Ваше здоровье -<br />наш приоритет</h1>
            <p className="hero__desc">
              Персонализированная, внимательная медицинская помощь, созданная вокруг вас.
              Хамзабек сочетает передовую медицину с искренней заботой, чтобы вы
              жили полноценной и здоровой жизнью.
            </p>
            <div className="hero__actions">
              <a href="#appointment" className="btn btn--primary btn--lg">
                <Calendar size={18} />
                Записаться на приём
              </a>
              <a href="#about" className="btn btn--outline btn--lg">
                Узнать больше
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero__image-wrap animate-fade-in">
            <img src={heroDoctorImg} alt="Биржан Хамзабек" />
          </div>
        </div>
      </div>
    </section>
  )
}
