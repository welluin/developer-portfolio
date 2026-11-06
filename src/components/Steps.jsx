import { steps } from '../data/content';

export default function Steps({
  title = 'Как строится работа над проектом',
  subtitle = 'Основные этапы от постановки задачи до проверки результата',
}) {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--4">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}