import { BookOpen, UserCheck, Leaf, CalendarCheck, Lock, MapPin } from 'lucide-react'

const benefits = [
  {
    Icon: BookOpen,
    title: 'Доказательная медицина',
    desc: 'Планы лечения, основанные на актуальных медицинских исследованиях и клинических рекомендациях.',
  },
  {
    Icon: UserCheck,
    title: 'Индивидуальный подход',
    desc: 'Каждый пациент получает персонализированный план, учитывающий его конкретные потребности и цели.',
  },
  {
    Icon: Leaf,
    title: 'Холистический подход',
    desc: 'Мы лечим человека целиком — физическое, эмоциональное и профилактическое здоровье для долгосрочного благополучия.',
  },
  {
    Icon: CalendarCheck,
    title: 'Запись в день обращения',
    desc: 'Гибкое расписание с возможностью визита в день обращения — чтобы вы не ждали нужной помощи.',
  },
  {
    Icon: Lock,
    title: 'Круглосуточный портал пациента',
    desc: 'Доступ к медкарте, результатам анализов и общение с нашей командой в любое время через защищённый портал.',
  },
  {
    Icon: MapPin,
    title: 'Удобное расположение',
    desc: 'Центральное расположение, удобная парковка, доступ для маломобильных пациентов и опции онлайн-записи.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="benefits__head reveal">
          <span className="section-label">Почему мы</span>
          <h2 className="benefits__title">Преимущества выбора Хамзабека</h2>
          <p className="benefits__desc">
            Здравоохранение, которое ставит вас на первое место — от первичного
            приёма до непрерывной поддержки вашего благополучия.
          </p>
        </div>
        <div className="benefits__grid">
          {benefits.map(({ Icon, title, desc }, i) => (
            <div key={title} className="benefits__card reveal" style={{ '--delay': `${i * 80}ms` }}>
              <div className="benefits__icon-wrap">
                <Icon size={24} />
              </div>
              <h3 className="benefits__card-title">{title}</h3>
              <p className="benefits__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
