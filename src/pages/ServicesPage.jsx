import PageHeader from '../components/PageHeader';
import ServicesGrid from '../components/ServicesGrid';
import Steps from '../components/Steps';
import Features from '../components/Features';
import CtaBanner from '../components/CtaBanner';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Направления"
        title="Направления разработки"
        subtitle="Основные области, инструменты и задачи, представленные в моих проектах."
      />

      <ServicesGrid
        title="С чем я работаю"
        subtitle="От пользовательского интерфейса до серверной логики и тестирования"
      />

      <Steps
        title="Подход к разработке"
        subtitle="Последовательность основных этапов работы над задачей"
      />

      <Features
        title="Мой подход"
        subtitle="Что считаю важным при создании программных продуктов"
      />

      <CtaBanner
        title="Посмотрите реализованные проекты"
        text="В портфолио можно изучить примеры задач, исходный код и используемые технологии."
        buttonLabel="Перейти к проектам"
        buttonPage="portfolio"
      />
    </>
  );
}