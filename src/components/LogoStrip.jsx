import { clients } from '../data/content';

export default function LogoStrip({ title = 'Технологии и инструменты' }) {
  return (
    <section className="section section--tight section--alt">
      <div className="container">
        <p className="logo-strip-title">{title}</p>
        <div className="logo-strip">
          {clients.map((name) => (
            <div className="logo-item" key={name}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}