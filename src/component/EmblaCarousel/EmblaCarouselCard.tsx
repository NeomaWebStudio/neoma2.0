export type FeedbackCardProps = {
    author: string,
    authorImg?: string,
    subTitle: string,
    feedbackText: string,
    image?: string,
}

const EmblaCarouselCard = ({ src }: { src: string }) => {

    return (
        <div className="embla__slide-feedback flex border gap-6 ">
            <div className="border rounded-xl border-[#A93CFF] w-76"
                style={{
                    backgroundImage: src ? `url(${src})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
            </div>
        </div>
    )
}
export default EmblaCarouselCard