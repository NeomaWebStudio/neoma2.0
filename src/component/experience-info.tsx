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
    return <div className="flex gap-6 py-12 font-nunito mt-[238px]">
        {info.map((item, index) => (
            <div key={index} className="border rounded-xl border-[#A93CFF] flex-1 text-white p-4 text-center">
                <div className="text-[64px]/19 mb-6">{item.title}</div>
                <div className="text-2xl">{item.description}</div>
            </div>
        ))}
    </div>
}

export default ExperienceInfo