export type FeedbackCardProps = {
  author: string,
  authorImg?: string,
  subTitle: string,
  feedbackText: string,
  image?: string,
}

const FeedbackCardMock = ({ author, subTitle, feedbackText, image, authorImg }: FeedbackCardProps) => {
  return (
    <div className="embla__slide-feedback flex border gap-6">

      <div className="flex flex-1 flex-col items-center border rounded-xl border-[#A93CFF]  text-white px-4 py-12">
        <div className="min-w-20 h-20 mb-6" style={{ backgroundImage: `url(../../assets/icon/clock.svg)`, backgroundSize: 'cover', backgroundPosition: 'center',}}></div>
        <div className="border-b border-gray-300 w-full mb-4"></div>
        <div className='mb-4'>Ми не збираємо фейкові відгуки.</div>
        <div className="border-b border-gray-300 w-full mb-6"></div>

        <div>Тут з’являться тільки реальні історії клієнтів після запуску перших проєктів.</div>
      </div>
    </div>
  )
}
export default FeedbackCardMock