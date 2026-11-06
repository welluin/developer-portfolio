import { useNavigation } from '../router/navigation';

export default function CtaBanner({
  title = 'Посмотрим проекты подробнее?',
  text = 'Исходный код, описание и используемые технологии доступны в моём GitHub.',
  buttonLabel = 'Открыть GitHub',
  buttonPage = 'portfolio',
  secondaryLabel = 'Связаться',
  secondaryPage = 'contacts',
}) {
  const { go } = useNavigation();

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-text">{text}</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-light" onClick={() => go(buttonPage)}>
              {buttonLabel}
            </button>
            {secondaryLabel && (
              <button className="btn btn-ghost" onClick={() => go(secondaryPage)}>
                {secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}