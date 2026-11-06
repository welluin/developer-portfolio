
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Steps from '../components/Steps';
import CtaBanner from '../components/CtaBanner';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Обо мне"
        title="Разработчик программного обеспечения"
        subtitle="Изучаю разработку цифровых продуктов и применяю знания в практических проектах."
      />

      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>О разработке</h2>
            <p>
              Мне интересно создавать программные продукты целиком: разбираться
              в задаче, продумывать структуру приложения, работать с данными,
              реализовывать интерфейс и проверять корректность работы.
            </p>
            <p>
              В проектах использую разные языки и инструменты. Особое внимание
              уделяю логике приложения, организации кода и тому, как отдельные
              части системы взаимодействуют между собой.
            </p>
            <p>
              Развиваю технические навыки через самостоятельное изучение
              технологий и создание собственных проектов.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/about.jpg" alt="Рабочее пространство" />
          </div>
        </div>
      </section>

      <Stats />

      <Features
        title="Мои принципы"
        subtitle="Что важно для меня в процессе разработки"
      />

      <Steps
        title="Как я подхожу к задачам"
        subtitle="От понимания требований до проверки готового решения"
      />

      <CtaBanner
        title="Хотите узнать больше о моих проектах?"
        text="Посмотрите репозитории и технические детали реализации."
        buttonLabel="Мой GitHub"
        buttonPage="portfolio"
      />
    </>
  );
}
