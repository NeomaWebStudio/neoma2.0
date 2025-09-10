import About from '@/component/about';
import ExperienceInfo from '@/component/experience-info';
import Header from '@/component/header';
import Price from '@/component/price';

export default function Home() {
  return (

    <main className="min-h-screen max-w-[1440px] px-18 mx-auto">
      <Header />
      <ExperienceInfo />
						<About/>
						<Price />
    </main>
  );
}
