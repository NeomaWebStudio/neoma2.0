import ExperienceInfo from '@/component/experience-info';
import Header from '@/component/header';

export default function Home() {
  return (

    <main className="min-h-screen max-w-[1440px] px-18 mx-auto">
      <Header />
      <ExperienceInfo />
    </main>
  );
}
