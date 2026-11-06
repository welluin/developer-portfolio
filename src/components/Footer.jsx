import { useNavigation } from '../router/navigation';
import { site } from '../data/site';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { go } = useNavigation();
  const { about, columns, copyright, author } = site.footer;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">{site.name}</div>
          <p className="footer-about">{about}</p>
          <a className="footer-contact" href={site.contacts.telegramUrl}>
            {site.contacts.telegram}
          </a>
          <a className="footer-contact" href={`mailto:${site.contacts.email}`}>
            {site.contacts.email}
          </a>
        </div>

        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <div className="footer-column-title">{column.title}</div>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.page ? (
                    <button className="footer-link" onClick={() => go(link.page)}>
                      {link.label}
                    </button>
                  ) : (
                    <a
                      className="footer-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <div>© {CURRENT_YEAR} {copyright}</div>
        <div>{author}</div>
      </div>
    </footer>
  );
}