import { feedbackData } from './data/feedbackData'
import EmblaCarouselFeedbackSection from './EmblaCarousel/EmblaCarouselFeedbackSection'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { align: 'start' }
const FeedbackSection = () => {
  return (
      <div>
      <EmblaCarouselFeedbackSection slides={feedbackData} options={OPTIONS} />
    </div>
  )
}
export default FeedbackSection