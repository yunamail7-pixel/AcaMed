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
        { name: t('nav.stories'), href: '/stories' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const isLightPage = location.pathname !== '/';

    const linkClass = ({ isActive }) =>
        `relative font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 py-1 whitespace-nowrap ${isActive
            ? 'text-secondary'
            : 'text-slate-600 hover:text-primary'
        }`;

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-slate-200/50 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                {/* Logo Section：更有生技公司質感 */}
                <NavLink to="/" className="flex items-center group">
                    <div className="relative">
                        <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl text-white font-black text-2xl shadow-2xl group-hover:bg-primary transition-colors duration-500">
                            A
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                    </div>
                    <div className="ml-5 flex flex-col justify-center">
                        <span className="text-2xl font-black tracking-tight leading-none transition-colors text-slate-900 whitespace-nowrap flex items-center gap-2">
                            AcaMed <span className="text-secondary italic font-light">Pharma</span>
                        </span>
                        <div className="flex items-center space-x-2 mt-1.5">
                            <span className="w-4 h-[1px] bg-secondary opacity-50" />
                            <span className="text-[11px] font-bold tracking-[0.3em] uppercase opacity-40 text-slate-900 whitespace-nowrap">Precision Extraction</span>
                        </div>
                    </div>
                </NavLink>

                {/* 桌面導航：更專業的排版 */}
                <div className="hidden lg:flex items-center ml-auto pl-20 space-x-12">
                    <div className="flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} to={link.href} className={linkClass}>
                                {({ isActive }) => (
                                    <div className="flex flex-col items-center">
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navDot"
                                                className="w-1 h-1 bg-secondary rounded-full mt-1.5 shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                                            />
                                        )}
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-slate-200 mx-2" />

                    {/* 語系切換：科研參數感 */}
                    <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                        {['en', 'zh', 'cn'].map((lng) => (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className={`text-xs font-black w-8 h-8 rounded-md transition-all ${i18n.language.startsWith(lng)
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
                        className="px-8 py-3 rounded-xl font-black text-xs tracking-[0.2em] uppercase transition-all shadow-xl hover:translate-y-[-2px] active:translate-y-0 active:shadow-inner bg-secondary text-white hover:bg-primary"
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
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.href}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) => `text-5xl font-black tracking-tighter transition-all ${isActive ? 'text-secondary translate-x-4' : 'text-slate-300 hover:text-slate-900'}`}
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="p-10 border-t border-slate-100 space-y-6">
                                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block bg-secondary text-white py-6 rounded-2xl text-center font-black uppercase tracking-widest text-xs">
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
