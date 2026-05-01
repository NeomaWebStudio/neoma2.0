import Nav from './nav'
import DynamicSpline from './DynamicSpline'

interface HeaderProps {
  translations: Record<string, string>
}

export default function Header({ translations }: HeaderProps) {
  return (
    <div className='xl:h-screen mb-24'>
      <Nav translations={translations} />

      <div className='flex gap-6 mt-12 xl:mt-40'>
        <div className='md:w-[55%]'>
          <h1 className='text-[38px] leading-[1.2] xl:text-[64px] tracking-[0.03em] xl:leading-[68px] text-white'>
            {translations['main_block_title']}
          </h1>

          <p className='text-[20px] leading-normal xl:text-[32px] xl:leading-[38px] tracking-0 text-white mt-4'>
            {translations['main_block_description']}
          </p>

          <div className='flex flex-col xl:flex-row mt-20 md:mt-10 xl:mt-20 gap-6'>
            <a href='#portfolio' className='w-full'>
              <button className='text-[#FFA157] text-xl w-full px-4 py-4 border border-[#ffa157] rounded-[50px] shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] transition-shadow duration-300 ease-in-out bg-[#05040D]'>
                {translations['our_projects']}
              </button>
            </a>

            <a href='#contact' className='w-full'>
              <button className='text-black text-xl w-full px-4 py-4 border border-[#FFA157] rounded-[50px] shadow-[inset_4px_4px_0_rgba(255,255,255,0.25),inset_4px_4px_12px_rgba(255,255,255,0.1),inset_-4px_-4px_4px_rgba(0,0,0,0.15)] transition-shadow duration-300 ease-in-out bg-[#FFA157]'>
                {translations['contact_btn']}
              </button>
            </a>
          </div>
        </div>

        <DynamicSpline />
      </div>
    </div>
  )
}
