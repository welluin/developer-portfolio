export const site = {
  name: 'Developer Portfolio',
  tagline: 'от идеи до реализации',

  nav: [
    { key: 'home', label: 'Главная' },
    { key: 'services', label: 'Направления' },
    { key: 'portfolio', label: 'Проекты' },
    { key: 'about', label: 'Обо мне' },
    { key: 'calculator', label: 'Технологии' },
    { key: 'contacts', label: 'Контакты' },
  ],

  headerCta: {
    label: 'Связаться',
    page: 'contacts',
  },

  contacts: {
    email: 'v864091@gmail.com',
    telegram: '@wellllu',
    telegramUrl: 'https://t.me/wellllu',
  },

  footer: {
    about:
      'Личное портфолио разработчика. Проекты в области веб-разработки, программной логики, баз данных и тестирования.',
    columns: [
      {
        title: 'Навигация',
        links: [
          { label: 'Главная', page: 'home' },
          { label: 'Направления', page: 'services' },
          { label: 'Проекты', page: 'portfolio' },
          { label: 'Обо мне', page: 'about' },
        ],
      },
      {
        title: 'Дополнительно',
        links: [
          { label: 'Технологии', page: 'calculator' },
          { label: 'Контакты', page: 'contacts' },
          { label: 'GitHub', href: 'https://github.com/welluin' },
        ],
      },
    ],
    copyright: 'Все права защищены',
    author: 'Developer Portfolio',
  },
};