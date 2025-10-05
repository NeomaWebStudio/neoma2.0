import About from '@/component/about';
import ExperienceInfo from '@/component/experience-info';
import Header from '@/component/header';
import Price from '@/component/price';
import OurProjects from '@/component/ourProjects';
import FeedbackSection from '@/component/feedback-section';
import Faq from '@/component/faq';
import FeedbackForm from '@/component/feedbackForm';
import Footer from '@/component/footer';

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1440px] px-18 mx-auto">
      <Header />
      <ExperienceInfo />
						<About/>
						<Price />
      <OurProjects /> 
      <FeedbackSection />
						<Faq/>
						<FeedbackForm/>
						{/* <Footer/> */}
    </main>
  );
}
