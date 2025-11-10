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
                <div className={`absolute right-0 bg-[#05040D] py-2 ${dropdownPosition}`}>
                    <button
                        onClick={() => switchLanguage('uk')}
                        className={`block w-full px-4 py-2 text-left hover:bg-[#A93CFF]/20 ${currentLang === 'uk' ? 'text-[#A93CFF]' : 'text-white'
                            }`}
                    >
                        Uk
                    </button>
                    <button
                        onClick={() => switchLanguage('en')}
                        className={`block w-full px-4 py-2 text-left hover:bg-[#A93CFF]/20 ${currentLang === 'en' ? 'text-[#A93CFF]' : 'text-white'
                            }`}
                    >
                        En
                    </button>
                </div>
            )}
        </div>
    )
}