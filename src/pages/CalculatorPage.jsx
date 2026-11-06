import PageHeader from '../components/PageHeader';
import LogoStrip from '../components/LogoStrip';
import ServicesGrid from '../components/ServicesGrid';
import CtaBanner from '../components/CtaBanner';

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        badge="Инструменты"
        title="Технологии"
        subtitle="Языки программирования, библиотеки и инструменты, которые использую в учебных и личных проектах."
      />

      <LogoStrip title="Технологический стек" />

      <ServicesGrid
        title="Области применения"
        subtitle="Как технологии используются в разработке"
      />

      <CtaBanner
        title="Технологии в реальных проектах"
        text="Посмотрите, какие инструменты использованы в каждом из представленных проектов."
        buttonLabel="Посмотреть проекты"
        buttonPage="portfolio"
      />
    </>
  );
}