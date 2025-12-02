export type FeedbackCardProps = {
  author: string,
  authorImg?: string,
  subTitle: string,
  feedbackText: string,
  image?: string,
}

const FeedbackCard = ({ author, subTitle, feedbackText, image, authorImg }: FeedbackCardProps) => {
  return (
    <div className="embla__slide-feedback flex border gap-6 ">

      <div className="flex flex-1 flex-col items-center border rounded-xl border-[#A93CFF]  text-white p-4">
        <div className="min-w-20 h-20 mb-6" style={{ backgroundImage: authorImg ? `url(${authorImg})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <h4 className='text-xl md:text-2xl mb-6 font-nunito'>{author}</h4>
        <div className="border-b border-gray-300 w-full mb-4"></div>
        <div className='mb-4'>{subTitle}</div>
        <div className="border-b border-gray-300 w-full mb-6"></div>
        <div>{feedbackText}</div>
      </div>

      {/* <div className="hidden xl:block border rounded-xl border-[#A93CFF] w-76"
        style={{
          backgroundImage: image ? `url(${image})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
      </div> */}
    </div>
  )
}
export default FeedbackCard