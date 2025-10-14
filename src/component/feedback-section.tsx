import { feedbackData } from './data/feedbackData'
import EmblaCarouselFeedbackSection from './EmblaCarousel/EmblaCarouselFeedbackSection'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { align: 'start' }
const FeedbackSection = () => {
  return (
    <div className="mb-24">
      <h3 className="text-[28px] text-center md:text-5xl text-white font-nanito mb-12">Відгуки</h3>
    <EmblaCarouselFeedbackSection slides={feedbackData} options={OPTIONS} />
    </div>
  )
}
export default FeedbackSection