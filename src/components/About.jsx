import aboutDoctorImg from '../assets/images/about-doctor.png'

const stats = [
  { value: '15+',     label: 'Лет опыта' },
  { value: '10 000+', label: 'Пациентов' },
  { value: '98%',     label: 'Довольных' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__image-wrap reveal">
            <img src={aboutDoctorImg} alt="Биржан Хамзабек" />
          </div>
          <div className="about__content reveal">
            <span className="section-label">О докторе Хамзабеке</span>
            <h2 className="about__title">Преданность исключительной заботе о пациентах</h2>
            <p className="about__desc">
              Имея более 15 лет опыта в терапии, Биржан Хамзабек подходит к каждому
              пациенту индивидуально. Выпускник Гарвардской медицинской школы и
              сертифицированный терапевт, он верит в лечение человека целиком, а не
              только симптомов. Его практика сочетает доказательную медицину с подлинным
              состраданием.
            </p>
            <div className="about__stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="about__stat">
                  <div className="about__stat-value">{value}</div>
                  <div className="about__stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
