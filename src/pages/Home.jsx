import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight, Shield, Beaker, Leaf, Cpu, Globe, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/img_reishi.jpg", // 改用本地圖片，確保絕對能顯示
            tag: t('home.hero_tag'),
            title: t('home.hero_title'),
            subtitle: t('home.hero_subtitle'),
            desc: t('home.hero_desc'),
        },
        {
            image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7960c9?auto=format&fit=crop&q=80&w=2000", // 科學萃取/綠色液體 (保留這張，如果不穩再換)
            tag: t('home.slide2_tag'),
            title: t('home.slide2_title'),
            subtitle: t('home.slide2_subtitle'),
            desc: t('home.slide2_desc'),
        },
        {
            image: "/img_lab.jpg", // 改用本地圖片，確保絕對能顯示
            tag: t('home.slide3_tag'),
            title: t('home.slide3_title'),
            subtitle: t('home.slide3_subtitle'),
            desc: t('home.slide3_desc'),
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="overflow-x-hidden bg-white">
            {/* 核心英雄區塊：回歸綠色品牌色 - 更新：字體縮小，圖片更清晰 */}
            <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-primary">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={slides[currentSlide].image}
                            alt="Background"
                            className="w-full h-full object-cover object-center"
                        />
                        {/* 修正：極輕量遮罩，僅在最左側確保文字可讀，絕不遮擋圖片主體 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl text-white"
                        >
                            <div className="inline-flex items-center space-x-3 mb-8">
                                <span className="h-px w-12 bg-emerald-400" />
                                <span className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase">
                                    {slides[currentSlide].tag}
                                </span>
                            </div>
                            {/* 更新：字體大小縮小至 3xl/5xl */}
                            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
                                {slides[currentSlide].title} <br />
                                <span className="text-emerald-300">{slides[currentSlide].subtitle}</span>
                            </h1>
                            <p className="text-base md:text-lg text-emerald-50 mb-10 leading-relaxed max-w-lg font-medium opacity-90">
                                {slides[currentSlide].desc}
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
                                <NavLink to="/products" className="px-10 py-5 bg-white text-primary font-black rounded-full hover:bg-emerald-50 transition-all shadow-xl flex items-center justify-center gap-3 group">
                                    <span>{t('home.cta_products')}</span>
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </NavLink>
                                <NavLink to="/about" className="px-10 py-5 border-2 border-emerald-400/50 text-white font-black rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                    <span>{t('home.cta_more')}</span>
                                </NavLink>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 輪播指示器 */}
                <div className="absolute bottom-12 right-12 z-20 flex space-x-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'}`}
                        />
                    ))}
                </div>
            </section>

            {/* Scientific Standard Section - 修復圖片與配色 */}
            <section className="py-32 relative z-10 bg-[#F0FDF4]">
                <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="h-px w-10 bg-primary"></span>
                            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Modernizing Medicine</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                            The standard of <br />
                            <span className="text-primary">scientific herbalism.</span>
                        </h2>
                        <p className="text-base text-slate-600 leading-relaxed font-medium">
                            We don't manufacture; we decode. By applying pharmaceutical-grade rigor to traditional herbs, AcaMed creates the next generation of precision health solutions.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                                <Beaker className="text-primary mb-4" size={28} />
                                <h4 className="font-bold text-slate-900 mb-1">Cold Extraction</h4>
                                <p className="text-xs text-slate-500">Zero-heat isolation</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                                <Cpu className="text-primary mb-4" size={28} />
                                <h4 className="font-bold text-slate-900 mb-1">Precision</h4>
                                <p className="text-xs text-slate-500">Targeted molecular</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-[3rem] transform rotate-3" />
                        <img
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000"
                            alt="Modern Pharma Lab"
                            className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white object-cover aspect-[4/3]"
                        />
                    </div>
                </div>
            </section>

            {/* 科研實力數據區塊 - 綠色風格 */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
                    {[
                        { label: "Extraction Purity", value: "99.7", unit: "%", sub: "Cold-extraction accuracy" },
                        { label: "Research History", value: "40", unit: "+", sub: "Years of Professor Wu's R&D" },
                        { label: "Clinical Trials", value: "FDA", unit: "II", sub: "U.S. & Taiwan FDA Approved" },
                        { label: "Medical Books", value: "700", unit: "+", sub: "Digitized TCAM knowledge" },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-4 text-center lg:text-left">
                            <p className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{stat.label}</p>
                            <div className="flex items-center justify-center lg:justify-start space-x-1">
                                <span className="text-4xl font-black text-white">{stat.value}</span>
                                <span className="text-emerald-400 font-bold text-lg">{stat.unit}</span>
                            </div>
                            <p className="text-sm text-emerald-100/70 font-medium">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 全球通路 - 簡化與綠色整合 */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-20">
                        <div className="md:w-1/2">
                            <h2 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-6 flex items-center">
                                <span className="w-8 h-px bg-primary mr-4" />
                                {t('home.global_presence')}
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                                {t('home.partnership')} & <span className="text-primary">Global Logistics</span>
                            </h3>
                            <p className="text-base text-slate-500 mb-8 leading-relaxed font-medium">
                                {t('home.amazon_text')}
                            </p>
                            <div className="flex items-center space-x-8">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-slate-900">Amazon US</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Official Store</span>
                                </div>
                                <div className="h-10 w-px bg-slate-200" />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-slate-900">Global</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Shipping</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
                            {[
                                { icon: <Globe size={28} />, label: "Global Reach", sub: "Serving international markets" },
                                { icon: <Shield size={28} />, label: "FDA Verified", sub: "Approved clinical standards" },
                                { icon: <Database size={28} />, label: "700+ Books", sub: "Ancient wisdom digitized" },
                                { icon: <Cpu size={28} />, label: "Bio-Tech", sub: "Precision cold extraction" }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-emerald-50/50 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md hover:bg-emerald-100/50 transition-all text-center">
                                    <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                                    <p className="text-xs text-slate-500 font-medium">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
