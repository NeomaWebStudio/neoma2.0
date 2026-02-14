interface TranslationProps {
    translations: Record<string, string>;
}

const ExperienceInfo = ({ translations }: TranslationProps) => {
    const info = [{
        title: '30+',
        description: translations["completed_projects"],
    },
    {
        title: '3+',
        description: translations["years_experience"],
    },
    {
        title: '100%',
        description: translations["satisfied_customers"],
    }]

    return <div className="flex flex-col md:flex-row gap-6 font-nunito mb-36 md:mt-[150px]">
        {info.map((item, index) => (
            <div key={index} className="border rounded-xl border-[#A93CFF] bg-[#0A081A] flex-1 basis-0 min-w-0 text-white p-4 pt-6 xl:pt-4 text-center">
                <h1 className="text-[42px] sm:text-[52px] xl:text-[64px]/19 mb-6 sm:mb-8 break-words w-full">{item.title}</h1>
                <p className="text-lg sm:text-xl md:text-2xl break-words w-full">{item.description}</p>
            </div>
        ))}
    </div>
}

export default ExperienceInfo