
import { useNavigation } from '../router/navigation';
import { services } from '../data/content';

const serviceImages = {
  Frontend: '/images/frontend.jpg',
  Backend: '/images/backend.jpg',
  Database: '/images/database.jpg',
  Testing: '/images/testing.jpg',
  'UI / UX': '/images/ui-ux.jpg',
  Development: '/images/development.jpg',
};

export default function ServicesGrid({
  title = 'Направления разработки',
  subtitle = 'Технологии и задачи, с которыми я работаю',
  limit,
}) {
  const { go } = useNavigation();
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--3">
          {items.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="ph ph--16x9 card-image">
                <img
                  src={serviceImages[service.tag]}
                  alt={service.title}
                />
              </div>

              <div className="card-body">
                <span className="card-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="center-action">
            <button
              className="btn btn-secondary"
              onClick={() => go('services')}
            >
              Все направления →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
