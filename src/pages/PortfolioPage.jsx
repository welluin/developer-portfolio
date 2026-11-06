import PageHeader from '../components/PageHeader';
import ProjectsGrid from '../components/ProjectsGrid';
import CtaBanner from '../components/CtaBanner';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        badge="Портфолио"
        title="Мои проекты"
        subtitle="Практические работы в области веб-разработки, баз данных и автоматизированного тестирования."
      />

      <ProjectsGrid
        title="Избранные проекты"
        subtitle="Описание задач, технические решения и используемые инструменты"
      />

      <CtaBanner
        title="Исходный код открыт"
        text="Больше информации о проектах и их реализации можно найти в моём GitHub."
        buttonLabel="Открыть GitHub"
        buttonPage="portfolio"
        secondaryLabel="Связаться"
        secondaryPage="contacts"
      />
    </>
  );
}