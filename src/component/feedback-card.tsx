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

        {/* 5-star rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-6 h-6"
              fill="#FFA157"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

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