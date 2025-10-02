import { useTranslations } from '../../utils/i18n';
import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '../../assets/icons/menu.svg?raw';
import XIcon from '../../assets/icons/x.svg?raw';
import Logo from '../../assets/icons/logo.svg?raw';
import classNames from 'classnames';
import Btn from '../Btn';

interface HeaderProps {
    lang: string;
}

const Header: React.FC<HeaderProps> = ({lang}) => {
    const t = useTranslations(lang as 'en' | 'es');
    const otherLang = lang === 'en' ? 'es' : 'en';
    const [newPath, setNewPath] = useState(`/${otherLang}/`);
    useEffect(() => {
        const currentPath = window.location.pathname; // now this runs on the client
        const updatedPath = currentPath.replace(/^\/(en|es)/, `/${otherLang}`);
        setNewPath(updatedPath);
    }, [otherLang]);
    const navItemsDOM = useRef<HTMLDivElement | null>(null);
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    const nav = [
        {
            label: t('nav.home'),
            href: `/${lang}/`,
        },
        {
            label: t('nav.menu'),
            href: `/${lang}/menu`,
        },
        {
            label: t('nav.events'),
            href: `/${lang}/events`,
        },
        {
            label: t('nav.reservation'),
            href: `/${lang}/reservation`,
        },
    ];

    useEffect(() => {
        const handleMobileNavClickOutside = (event: MouseEvent) => {
            const navItemsEl = navItemsDOM.current;

            if (navItemsEl && !navItemsEl.contains(event.target as Node)) {
                setShowMobileMenu(false);
            }
        };

        if (showMobileMenu) {
            document.addEventListener('click', handleMobileNavClickOutside);
        } else {
            document.removeEventListener('click', handleMobileNavClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleMobileNavClickOutside);
        };
    }, [showMobileMenu]);

    return (
        <header className="relative z-50">
            <div className="relative z-10 container">
                <nav className="relative flex items-center justify-between pt-6 lg:pt-8">
                    <a
                        href={`/${lang}/`}
                        className="flex md:flex-1"
                        aria-label="Home page"
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: Logo }}
                            className={classNames('w-[110px] md:w-[180px]', {
                                'max-md:grayscale-0 max-md:brightness-[0.2] max-md:invert-0':
                                    showMobileMenu,
                            })}
                        />
                    </a>
                    <ul
                        className={classNames(
                            'flex flex-col gap-4 max-md:absolute max-md:left-0 max-md:-bottom-9 max-md:translate-y-full max-md:w-full md:flex-row md:flex-1 md:justify-center lg:gap-8',
                            {
                                'flex flex-co': showMobileMenu,
                                'max-md:hidden': !showMobileMenu,
                            },
                        )}
                    >
                        {nav.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-lg leading-none tracking-[-0.41px] uppercase md:text-sm"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={`/${lang}/`}
                                className="text-lg leading-none tracking-[-0.41px] uppercase md:hidden"
                            >
                              {t('nav.contact')}
                            </a>
                        </li>
                    </ul>

                    <div className="flex justify-end max-md:hidden md:flex-1 gap-4">
                        <Btn to={newPath} className="uppercase">
                            <span>{otherLang === 'en' ? 'English' : 'Español'}</span>
                        </Btn>
                        <Btn to={`/${lang}/contact`} className="uppercase">
                            <span>{t('btn.contact')}</span>
                        </Btn>
                    </div>
                    <button
                        className="flex md:hidden"
                        aria-label="Toggle mobile menu"
                        onClick={() => setShowMobileMenu((prev) => !prev)}
                    >
                        {showMobileMenu ? (
                            <div
                                dangerouslySetInnerHTML={{ __html: XIcon }}
                                className="w-6 h-6"
                            />
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{ __html: MenuIcon }}
                                className="w-6 h-6"
                            />
                        )}
                    </button>
                </nav>
            </div>
            {showMobileMenu && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-appAccent md:hidden" />
            )}
        </header>
    );
};

export default Header;
