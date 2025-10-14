import { feedbackData } from './data/feedbackData'
import { feedbackDataEN } from './data/feedbackDataEN'
import EmblaCarouselFeedbackSection from './EmblaCarousel/EmblaCarouselFeedbackSection'
import { EmblaOptionsType } from 'embla-carousel'

interface TranslationProps {
  translations: Record<string, string>;
  locale: string;
}


const OPTIONS: EmblaOptionsType = { align: 'start' }
const FeedbackSection = ({ translations, locale }: TranslationProps) => {
   const feedbackDataLocalized = locale === 'en' ? feedbackDataEN : feedbackData;
  return (
      <div>
      <div className='text-center'>
				<h3 className='font-nunito text-5xl text-white flex justify-center items-center mb-10'>{translations['testimonials']}</h3>
			</div>
      <EmblaCarouselFeedbackSection slides={feedbackDataLocalized} options={OPTIONS} />
    </div>
  )
}
export default FeedbackSection