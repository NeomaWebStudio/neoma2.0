interface TranslationProps {
    translations: Record<string, string>;
}

const ExperienceInfo = ({ translations }: TranslationProps) => {
    const info = [{
        title: '50+',
        description: translations["completed_projects"],
    },
    {
        title: '5+',
        description: translations["years_experience"],
    },
    {
        title: '100%',
        description: translations["satisfied_customers"],
    }]

    return <div className="flex flex-col md:flex-row gap-6 font-nunito mb-36 md:mt-[150px]">
        {info.map((item, index) => (
            <div key={index} className="border rounded-xl border-[#A93CFF] bg-[#0A081A] flex-1 basis-0 min-w-0 text-white p-4 text-center">
                <div className="text-[52px] lg:text-[64px]/19 mb-6">{item.title}</div>
                <div className="text-xl md:text-2xl">{item.description}</div>
            </div>
        ))}
    </div>
}

export default ExperienceInfo