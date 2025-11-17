import About from '@/component/about';
import ExperienceInfo from '@/component/experience-info';
import Header from '@/component/header';
import Price from '@/component/price';
import OurProjects from '@/component/ourProjects';
import FeedbackSection from '@/component/feedback-section';
import Faq from '@/component/faq';
import FeedbackForm from '@/component/feedbackForm';
import path from 'path';
import fs from 'fs/promises';
import Footer from '@/component/footer';
// Додаємо тип для params
interface PageProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  // Підвантаження перекладів
  const filePath = path.join(process.cwd(), 'translation', `${locale}.json`);
  let translations: Record<string, string> = {};

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    translations = JSON.parse(fileContent);
  } catch (e) {
    console.error(`Файл перекладів для локалі "${locale}" не знайдено.`);
  }
  return (
    <div>
      <main className="min-h-screen max-w-[1440px] px-[18px] xs:px-[30px] md:px-18 mx-auto">
        <Header translations={translations} />
        <ExperienceInfo translations={translations} />
        <About translations={translations} />
        <Price translations={translations} locale={locale} />
        <OurProjects translations={translations} />
        <FeedbackSection translations={translations} locale={locale} />
        <Faq translations={translations} />
        <FeedbackForm translations={translations} />
      </main>
      <Footer translations={translations} />
    </div>
  );
}
