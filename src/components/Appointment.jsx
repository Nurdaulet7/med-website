import { MapPin, Phone, Mail, Calendar } from 'lucide-react'

const contacts = [
  { Icon: MapPin,  text: 'ул. Медицинская, д. 123, оф. 210, Москва' },
  { Icon: Phone,   text: '+7 (495) 555-01-62' },
  { Icon: Mail,    text: 'info@hamzabekmd.ru' },
]

export default function Appointment() {
  return (
    <section className="appointment" id="appointment">
      <div className="container">
        <div className="appointment__inner">

          <div className="appointment__info reveal">
            <span className="section-label">Запись на приём</span>
            <h2 className="appointment__title">Запишитесь на визит сегодня</h2>
            <p className="appointment__desc">
              Сделайте первый шаг к лучшему здоровью. Запишитесь на консультацию
              к Хамзабеку и почувствуйте разницу персонализированной медицины.
            </p>
            <div className="appointment__contacts">
              {contacts.map(({ Icon, text }) => (
                <div key={text} className="appointment__contact-item">
                  <Icon size={16} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="appointment__form-card reveal">
            <h3 className="appointment__form-title">Оставить заявку</h3>
            <form>
              <div className="appointment__form-row">
                <div className="appointment__field">
                  <label className="appointment__label">Имя</label>
                  <input className="appointment__input" type="text" placeholder="Иван" />
                </div>
                <div className="appointment__field">
                  <label className="appointment__label">Фамилия</label>
                  <input className="appointment__input" type="text" placeholder="Иванов" />
                </div>
              </div>
              <div className="appointment__field">
                <label className="appointment__label">Email</label>
                <input className="appointment__input" type="email" placeholder="ivan@mail.ru" />
              </div>
              <div className="appointment__form-row">
                <div className="appointment__field">
                  <label className="appointment__label">Телефон</label>
                  <input className="appointment__input" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="appointment__field">
                  <label className="appointment__label">Желаемая дата</label>
                  <input className="appointment__input" type="date" />
                </div>
              </div>
              <div className="appointment__field">
                <label className="appointment__label">Сообщение (необязательно)</label>
                <textarea
                  className="appointment__textarea"
                  placeholder="Опишите симптомы или причину визита..."
                />
              </div>
              <button type="submit" className="btn btn--primary btn--full btn--lg">
                <Calendar size={18} />
                Записаться на приём
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
