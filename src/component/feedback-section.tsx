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
    <div className="mb-24">
      <h3 className="text-[28px] text-center md:text-5xl text-white font-nanito mb-12">{translations['testimonials']}</h3>
      <EmblaCarouselFeedbackSection slides={feedbackDataLocalized} options={OPTIONS} />
    </div>
  )
}
export default FeedbackSection