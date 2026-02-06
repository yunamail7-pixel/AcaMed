import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Cpu, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.products'), href: '/products' },
        { name: t('nav.rd'), href: '/rd' },
        { name: t('nav.stories'), href: 'https://www.amazon.com/stores/AcaMed/page/914B4FB0-A22A-4794-A9D1-465DECA1B26E' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const isLightPage = location.pathname !== '/';

    const linkClass = ({ isActive }) =>
        `relative font-bold text-sm tracking-wider uppercase transition-all duration-300 py-2 whitespace-nowrap ${isActive
            ? 'text-primary'
            : 'text-slate-600 hover:text-primary'
        }`;

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-5 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                {/* Logo Section：更有生技公司質感 */}
                <NavLink to="/" className="flex items-center group">
                    <div className="relative">
                        <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-2xl text-white font-black text-3xl shadow-lg group-hover:bg-primary transition-all duration-500 transform group-hover:scale-105">
                            A
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-[0_0_15px_rgba(101,163,13,0.5)]" />
                    </div>
                    <div className="ml-6 flex flex-col justify-center">
                        <span className="text-3xl font-black tracking-tighter leading-none transition-colors text-slate-900 whitespace-nowrap flex items-center gap-2">
                            AcaMed <span className="text-secondary italic font-medium">Pharma</span>
                        </span>
                        <div className="flex items-center space-x-3 mt-2">
                            <span className="w-6 h-[1.5px] bg-secondary opacity-60" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 text-slate-800 whitespace-nowrap">Precision Extraction</span>
                        </div>
                    </div>
                </NavLink>

                {/* 桌面導航：更專業的排版 */}
                <div className="hidden lg:flex items-center ml-auto pl-16 space-x-10">
                    <div className="flex items-center space-x-12">
                        {navLinks.map((link) => {
                            const isExternal = link.href.startsWith('http');
                            if (isExternal) {
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative font-bold text-sm tracking-wider uppercase transition-all duration-300 py-2 whitespace-nowrap text-slate-600 hover:text-primary"
                                    >
                                        {link.name}
                                    </a>
                                );
                            }
                            return (
                                <NavLink key={link.href} to={link.href} className={linkClass}>
                                    {({ isActive }) => (
                                        <div className="flex flex-col items-center">
                                            {link.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navDot"
                                                    className="absolute -bottom-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(6,78,59,0.4)]"
                                                />
                                            )}
                                        </div>
                                    )}
                                </NavLink>
                            );
                        })}
                    </div>

                    <div className="h-6 w-px bg-slate-200 mx-4" />

                    {/* 語系切換：科研參數感 */}
                    <div className="flex items-center space-x-1 bg-slate-50 p-1.5 rounded-xl border border-slate-200/60 font-medium">
                        {['en', 'zh', 'cn'].map((lng) => (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className={`text-[13px] font-bold w-10 h-10 rounded-lg transition-all ${i18n.language.startsWith(lng)
                                    ? 'bg-secondary text-white shadow-md'
                                    : 'text-slate-500 hover:text-secondary hover:bg-white'
                                    }`}
                            >
                                {lng === 'en' ? 'EN' : lng === 'zh' ? '繁' : '简'}
                            </button>
                        ))}
                    </div>

                    <NavLink
                        to="/contact"
                        className="px-10 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-xl hover:translate-y-[-3px] active:translate-y-0 active:shadow-inner bg-secondary text-white hover:bg-primary hover:shadow-secondary/20"
                    >
                        {t('nav.contact')}
                    </NavLink>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-3 rounded-xl transition-all bg-slate-100 text-slate-900"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="fixed inset-0 z-50 lg:hidden bg-white"
                    >
                        <div className="flex flex-col h-full">
                            <div className="p-10 flex justify-between items-center border-b border-slate-100">
                                <span className="text-xl font-black tracking-tighter text-slate-900">MENU</span>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl"><X /></button>
                            </div>
                            <div className="flex-1 p-10 space-y-8 flex flex-col justify-center">
                                {navLinks.map((link) => {
                                    const isExternal = link.href.startsWith('http');
                                    if (isExternal) {
                                        return (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-5xl font-black tracking-tighter transition-all text-slate-300 hover:text-slate-900"
                                            >
                                                {link.name}
                                            </a>
                                        );
                                    }
                                    return (
                                        <NavLink
                                            key={link.href}
                                            to={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={({ isActive }) => `text-5xl font-black tracking-tighter transition-all ${isActive ? 'text-secondary translate-x-4' : 'text-slate-300 hover:text-slate-900'}`}
                                        >
                                            {link.name}
                                        </NavLink>
                                    );
                                })}
                            </div>
                            <div className="p-10 border-t border-slate-100 space-y-6">
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block bg-secondary text-white py-6 rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform"
                                >
                                    {t('nav.contact')}
                                </NavLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
