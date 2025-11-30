'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
    position?: 'top' | 'bottom'
}

export default function LanguageSwitcher({ position = 'bottom' }: LanguageSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const dropdownRef = useRef<HTMLDivElement>(null)

    const currentLang = pathname.split('/')[1]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const switchLanguage = (lang: string) => {
        const newPath = pathname.replace(`/${currentLang}`, `/${lang}`)
        router.push(newPath)
        setIsOpen(false)
    }

    const dropdownPosition = position === 'top'
        ? 'bottom-full left-4 mb-2'
        : 'top-full mt-2'

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className='text-white'>{currentLang === 'uk' ? 'Uk' : 'En'}</p>
                <img
                    src="/assets/icon/nav-arrow-down.svg"
                    alt="navArrowDown"
                    className={`w-6 h-6 transition-transform duration-300 ${position === 'top'
                            ? isOpen ? 'rotate-0' : 'rotate-180'  // For top position
                            : isOpen ? 'rotate-180' : 'rotate-0'  // For bottom position
                        }`}
                />
            </div>

            {isOpen && (
    <div
        className={`absolute bg-transparent rounded-full p-1 cursor-pointer 
            ${dropdownPosition} z-50`}
    >
        <div
            onClick={() => switchLanguage('uk')}
            className={`hover:bg-[#dec5f1] hover:text-white px-3 py-1 rounded-full text-sm font-medium transition-all
                ${currentLang === 'uk' ? 'bg-[#A93CFF] text-white' : 'text-gray-300'}
            `}
        >
            UK
        </div>

        <div
            onClick={() => switchLanguage('en')}
            className={`hover:bg-[#dec5f1] hover:text-white px-3 py-1 rounded-full text-sm font-medium transition-all
                ${currentLang === 'en' ? 'bg-[#A93CFF] text-white' : 'text-gray-300'}
            `}
        >
            EN
        </div>
    </div>
)}

        </div>
    )
}