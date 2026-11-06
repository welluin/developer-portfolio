import { useNavigation } from '../router/navigation';
import { projects } from '../data/content';

// Карточки реальных проектов из GitHub.
export default function ProjectsGrid({
  title = 'Мои проекты',
  subtitle = 'Учебные и самостоятельные работы',
  limit,
}) {
  const { go } = useNavigation();
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--3">
          {items.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className="project-image"
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                  padding: 0,
                  background: project.coverBackground,
                }}
              >
                <img
                  src={project.image}
                  alt={`Обложка проекта ${project.title}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px',
                    color: '#ffffff',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      opacity: 0.8,
                    }}
                  >
                    PROJECT / {project.year}
                  </span>

                  <strong
                    style={{
                      fontSize: 'clamp(22px, 3vw, 34px)',
                      lineHeight: 1.1,
                      fontWeight: 700,
                    }}
                  >
                    {project.title}
                  </strong>
                </div>
              </div>

              <div className="card-body">
                <div className="project-meta">
                  <span className="card-tag">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.result}</p>

                {project.technologies?.length > 0 && (
                  <div
                    className="project-technologies"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginTop: '16px',
                    }}
                  >
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '20px',
                          background: '#f0f2f7',
                          color: '#343b4b',
                          fontSize: '12px',
                        }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '20px',
                    }}
                  >
                    Исходный код на GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="center-action">
            <button
              className="btn btn-secondary"
              onClick={() => go('portfolio')}
            >
              Все проекты →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}