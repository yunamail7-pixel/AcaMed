import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

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


    const linkClass = ({ isActive }) =>
        `relative font-bold text-base tracking-tight uppercase transition-all duration-300 py-2 whitespace-nowrap ${isActive
            ? 'text-primary'
            : 'text-slate-600 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]'
        }`;

    return (
        <>
            <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2 lg:py-3' : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3 lg:py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    {/* Logo Section：更有生技公司質感 */}
                    <NavLink to="/" className="flex items-center group">
                        <img
                            src={logo}
                            alt="AcaMed Logo"
                            className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-lg ${isScrolled ? 'h-8 lg:h-14' : 'h-10 lg:h-20'}`}
                        />
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
                                            className="relative font-bold text-base tracking-tight uppercase transition-all duration-300 py-2 whitespace-nowrap text-slate-600 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
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
                                                        className="absolute -bottom-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(6,78,59,0.6)]"
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
                                    className={`text-sm font-bold w-10 h-10 rounded-lg transition-all active:scale-95 ${i18n.language.startsWith(lng)
                                        ? 'bg-secondary text-white shadow-md'
                                        : 'text-slate-500 hover:text-secondary hover:bg-white hover:shadow-sm'
                                        }`}
                                >
                                    {lng === 'en' ? 'EN' : lng === 'zh' ? '繁' : '简'}
                                </button>
                            ))}
                        </div>

                        <NavLink
                            to="/contact"
                            className="whitespace-nowrap px-8 py-4 rounded-2xl font-black text-base tracking-tight uppercase transition-all shadow-xl hover:translate-y-[-3px] active:translate-y-0 active:shadow-inner bg-secondary text-white hover:bg-primary hover:shadow-secondary/40 relative overflow-hidden group"
                        >
                            <span className="relative z-10">{t('nav.contact')}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </NavLink>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-3 rounded-xl transition-all bg-slate-100 text-slate-900 active:scale-95"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* 移動端選單：沈浸式深綠色風格 */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'fixed',
                                inset: 0, // 強制四邊貼合
                                zIndex: 9999,
                                backgroundColor: '#064E3B',
                                backgroundImage: 'radial-gradient(circle at top right, #059669 0%, #064E3B 60%)',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100vw',
                                height: '100dvh', // 使用 dynamic viewport height 解決手機網址列問題
                                overflow: 'hidden',
                                overscrollBehavior: 'none' // 防止滾動傳遞
                            }}
                        >
                            <div className="flex flex-col h-full relative">
                                {/* 頂部導航條 */}
                                <div className="px-8 py-6 flex justify-between items-center border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <Globe className="text-emerald-400" size={24} />
                                        <span className="text-lg font-bold tracking-[0.2em] text-white uppercase font-heading">
                                            ACAMED
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all border border-white/10 active:scale-90"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* 選單連結區 */}
                                <div className="flex-1 flex flex-col justify-center items-center space-y-6 p-8">
                                    {navLinks.map((link) => {
                                        const isExternal = link.href.startsWith('http');
                                        // 優化後樣式：更優雅的字體大小與間距
                                        const commonClass = "text-lg font-bold tracking-[0.15em] text-white/60 hover:text-white transition-all duration-300 font-heading text-center py-1 uppercase";
                                        const activeClass = "text-2xl text-white font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] scale-110";

                                        if (isExternal) {
                                            return (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={commonClass}
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
                                                className={({ isActive }) => `${commonClass} ${isActive ? activeClass : ''}`}
                                            >
                                                {link.name}
                                            </NavLink>
                                        );
                                    })}
                                </div>

                                {/* 底部功能區 */}
                                <div className="p-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
                                    <NavLink
                                        to="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center w-full py-5 bg-gradient-to-r from-secondary to-secondary-light text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all active:scale-95"
                                    >
                                        <span>{t('nav.contact')}</span>
                                        <ChevronRight className="ml-2" size={18} />
                                    </NavLink>

                                    {/* 行動端選單語系切換器 */}
                                    <div className="mt-8 flex items-center justify-center space-x-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                                        {['en', 'zh', 'cn'].map((lng) => (
                                            <button
                                                key={lng}
                                                onClick={() => {
                                                    changeLanguage(lng);
                                                    // 不關閉菜單，讓用戶看到切換效果
                                                }}
                                                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all active:scale-95 ${i18n.language.startsWith(lng)
                                                    ? 'bg-secondary text-white shadow-lg'
                                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {lng === 'en' ? 'EN' : lng === 'zh' ? '繁' : '简'}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex justify-center space-x-6 text-white/40 text-xs tracking-widest uppercase">
                                        <span>© 2024 AcaMed</span>
                                        <span>•</span>
                                        <span>Privacy</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav >

            {/* 行動端專用懸浮語系按鈕：符合用戶截圖設計 */}
            <div className="lg:hidden fixed bottom-6 right-6 z-[110] flex flex-col items-end space-y-3 print:hidden">
                <AnimatePresence>
                    {/* 語系選擇按鈕組合 */}
                    {true && ( // 這裡原本想做展開，但考慮到直接顯示最方便
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-200 flex flex-col space-y-1 mb-2"
                        >
                            {['en', 'zh', 'cn'].map((lng) => (
                                <button
                                    key={lng}
                                    onClick={() => changeLanguage(lng)}
                                    className={`w-12 h-12 rounded-xl font-black text-xs transition-all flex items-center justify-center ${i18n.language.startsWith(lng)
                                        ? 'bg-secondary text-white'
                                        : 'text-slate-400 hover:bg-slate-50'
                                        }`}
                                >
                                    {lng === 'en' ? 'EN' : lng === 'zh' ? '繁' : '简'}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 主切換按鈕 */}
                <button
                    disabled
                    className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all border-4 border-white"
                >
                    <Globe size={24} />
                </button>
            </div>
        </>
    );
};

export default Navbar;
