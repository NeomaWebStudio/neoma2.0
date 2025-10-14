import { feedbackData } from './data/feedbackData'
import EmblaCarouselFeedbackSection from './EmblaCarousel/EmblaCarouselFeedbackSection'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { align: 'start' }
const FeedbackSection = () => {
  return (
      <EmblaCarouselFeedbackSection slides={feedbackData} options={OPTIONS} />
  )
}
export default FeedbackSection