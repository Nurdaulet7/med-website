const testimonials = [
  {
    text: '«Хамзабек действительно слушает и всегда находит время всё объяснить. Я никогда не чувствовал себя таким уверенным в своём здоровье. Он изменил мою жизнь.»',
    name: 'Мария Родригес',
    role: 'Пациент по диабету',
  },
  {
    text: '«После многих лет, когда меня не слышали другие врачи, Хамзабек стал глотком свежего воздуха. Его профилактический подход выявил проблему, которая могла стать серьёзной.»',
    name: 'Джеймс Томпсон',
    role: 'Пациент профилактического направления',
  },
  {
    text: '«Телемедицина изменила всё для моего напряжённого графика. То же качество, невероятное удобство. Рекомендую Хамзабека всем, кого знаю.»',
    name: 'Сара Ким',
    role: 'Пациент телемедицины',
  },
]

function Stars() {
  return (
    <div className="testimonials__stars">
      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__head reveal">
          <span className="section-label">Отзывы</span>
          <h2 className="testimonials__title">Что говорят наши пациенты</h2>
          <p className="testimonials__desc">Реальные истории пациентов, доверяющих Хамзабеку своё здоровье.</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map(({ text, name, role }, i) => (
            <div key={name} className="testimonials__card reveal" style={{ '--delay': `${i * 100}ms` }}>
              <Stars />
              <p className="testimonials__text">{text}</p>
              <div className="testimonials__author-name">{name}</div>
              <div className="testimonials__author-role">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
