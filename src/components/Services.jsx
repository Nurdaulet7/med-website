import { Stethoscope, ShieldCheck, Activity, Heart, Brain, Video } from 'lucide-react'

const services = [
  {
    Icon: Stethoscope,
    title: 'Первичная помощь',
    desc: 'Комплексные осмотры, плановые визиты и непрерывное наблюдение для вашего общего здоровья.',
  },
  {
    Icon: ShieldCheck,
    title: 'Профилактика',
    desc: 'Скрининги, вакцинация и превентивные стратегии — чтобы оставаться здоровым и выявлять проблемы заранее.',
  },
  {
    Icon: Activity,
    title: 'Управление хроническими заболеваниями',
    desc: 'Профессиональное ведение диабета, гипертонии и других хронических состояний по индивидуальному плану.',
  },
  {
    Icon: Heart,
    title: 'Женское здоровье',
    desc: 'Специализированная помощь с учётом уникальных потребностей женского здоровья на каждом этапе жизни.',
  },
  {
    Icon: Brain,
    title: 'Психическое благополучие',
    desc: 'Комплексная поддержка психического здоровья: управление стрессом, тревогой и эмоциональным состоянием.',
  },
  {
    Icon: Video,
    title: 'Телемедицина',
    desc: 'Удобные онлайн-консультации из дома с тем же уровнем качества медицинской помощи.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head reveal">
          <span className="section-label">Наши услуги</span>
          <h2 className="services__title">Комплексная помощь на любой случай</h2>
          <p className="services__desc">
            От профилактики до лечения хронических заболеваний — мы предлагаем полный
            спектр медицинских услуг, адаптированных под ваши потребности.
          </p>
        </div>
        <div className="services__grid">
          {services.map(({ Icon, title, desc }, i) => (
            <div key={title} className="services__card reveal" style={{ '--delay': `${i * 80}ms` }}>
              <div className="services__icon-wrap">
                <Icon size={24} />
              </div>
              <h3 className="services__card-title">{title}</h3>
              <p className="services__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
