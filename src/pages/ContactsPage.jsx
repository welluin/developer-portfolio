import PageHeader from '../components/PageHeader';
import Faq from '../components/Faq';
import { site } from '../data/site';

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        badge="Контакты"
        title="Связаться со мной"
        subtitle="Для связи можно воспользоваться электронной почтой или написать в Telegram."
      />

      <section className="section">
        <div className="container split split--wide">
          <div className="contact-info">
            <h2>Контактная информация</h2>
            <p>
              Буду рада сообщениям по поводу проектов, разработки и
              профессионального взаимодействия.
            </p>

            <ul className="contact-list">
              <li className="contact-row">
                <span className="contact-row-label">E-mail</span>
                <a
                  className="contact-row-value"
                  href={`mailto:${site.contacts.email}`}
                >
                  {site.contacts.email}
                </a>
              </li>

              <li className="contact-row">
                <span className="contact-row-label">Telegram</span>
                <a
                  className="contact-row-value"
                  href={site.contacts.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.contacts.telegram}
                </a>
              </li>

              <li className="contact-row">
                <span className="contact-row-label">GitHub</span>
                <a
                  className="contact-row-value"
                  href="https://github.com/welluin"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/welluin
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form-card">
            <h3>Открытые проекты</h3>
            <p className="form-subtitle">
              Исходный код и описание работ доступны в открытых репозиториях.
            </p>
            <a
              className="btn btn-primary btn-block"
              href="https://github.com/welluin"
              target="_blank"
              rel="noreferrer"
            >
              Перейти на GitHub
            </a>
            <a
              className="btn btn-secondary btn-block"
              href={site.contacts.telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <Faq
        title="Перед обращением"
        subtitle="Несколько вопросов о проектах и связи"
      />
    </>
  );
}