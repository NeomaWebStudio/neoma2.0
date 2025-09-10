
const info = [{
    title: '50+',
    description: 'Завершених проектів',
},
{
    title: '5+',
    description: 'Років досвіду',
},
{
    title: '100%',
    description: 'Задоволених клієнтів',
}]
const ExperienceInfo = () => {
    return <div className="flex gap-6 py-12 font-nunito ">
        {info.map((item, index) => (
            <div key={index} className="border rounded-xl border-[#A93CFF] flex-1 text-white p-4 text-center">
                <div className="text-[64px]/19 mb-6">{item.title}</div>
                <div className="text-2xl">{item.description}</div>
            </div>
        ))}
    </div>
}

export default ExperienceInfo