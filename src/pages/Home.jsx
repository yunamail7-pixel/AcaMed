import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Beaker, Cpu, Globe, Shield, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Hero carousel logic remains the same
    const slides = [
        {
            image: "/img_reishi.jpg", // Local Reishi Image
            tag: t('home.hero_tag'),
            title: t('home.hero_title'),
            subtitle: t('home.hero_subtitle'),
            desc: t('home.hero_desc'),
        },
        {
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Reliable Science/Lab Image
            tag: t('home.slide2_tag'),
            title: t('home.slide2_title'),
            subtitle: t('home.slide2_subtitle'),
            desc: t('home.slide2_desc'),
        },
        {
            image: "/img_lab.jpg", // Local Lab Image
            tag: t('home.slide3_tag'),
            title: t('home.slide3_title'),
            subtitle: t('home.slide3_subtitle'),
            desc: t('home.slide3_desc'),
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000); // 10 seconds per slide
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="overflow-x-hidden bg-white">
            {/* 核心英雄區塊：回歸綠色品牌色 */}
            <section className="relative h-[85vh] md:h-screen min-h-[500px] flex items-center overflow-hidden bg-primary">
                {/* Background Image with Slow Zoom */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={slides[currentSlide].image}
                            alt="Background"
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-4xl text-white"
                        >
                            <div className="inline-flex items-center space-x-3 mb-8">
                                <span className="h-px w-12 bg-emerald-400" />
                                <span className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase">
                                    {slides[currentSlide].tag}
                                </span>
                            </div>
                            {/* 手機版：標題極致縮小以確保不重疊 */}
                            <h1 className="text-xl md:text-5xl font-black mb-4 md:mb-10 leading-tight tracking-tight drop-shadow-xl">
                                {slides[currentSlide].title} <br />
                                <span className="text-emerald-300">{slides[currentSlide].subtitle}</span>
                            </h1>
                            <p className="block text-xs md:text-lg text-emerald-50 mb-8 md:mb-12 leading-relaxed max-w-[280px] md:max-w-lg font-medium">
                                {slides[currentSlide].desc}
                            </p>
                            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
                                <NavLink to="/products" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-black rounded-xl shadow-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors">
                                    <span className="text-sm">{t('home.cta_products')}</span>
                                    <ChevronRight size={16} />
                                </NavLink>
                                <NavLink to="/about" className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <span className="text-sm">{t('home.cta_more')}</span>
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

            {/* Scientific Standard Section - 加入 ScrollReveal */}
            <section className="py-32 relative z-10 bg-[#F0FDF4] overflow-hidden">
                <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <ScrollReveal>
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="h-px w-10 bg-primary"></span>
                                <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Modernizing Medicine</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                                The standard of <br />
                                <span className="text-primary">scientific herbalism.</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed font-medium mt-6">
                                We don't manufacture; we decode. By applying pharmaceutical-grade rigor to traditional herbs, AcaMed creates the next generation of precision health solutions.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <ScrollReveal delay={0.2}>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <Beaker className="text-primary mb-4" size={28} />
                                    <h4 className="font-bold text-slate-900 mb-1">Cold Extraction</h4>
                                    <p className="text-xs text-slate-500">Zero-heat isolation</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <Cpu className="text-primary mb-4" size={28} />
                                    <h4 className="font-bold text-slate-900 mb-1">Precision</h4>
                                    <p className="text-xs text-slate-500">Targeted molecular</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <ScrollReveal delay={0.4}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/5 rounded-[3rem] transform rotate-3 scale-105" />
                                <img
                                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000"
                                    alt="Modern Pharma Lab"
                                    className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 科研實力數據區塊 - 加入 ScrollReveal 與計數動畫概念（這裡先用 ScrollReveal 做淡入） */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse-slow"></div>
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
                    {[
                        { label: "Extraction Purity", value: "99.7", unit: "%", sub: "Cold-extraction accuracy" },
                        { label: "Research History", value: "40", unit: "+", sub: "Years of Professor Wu's R&D" },
                        { label: "Clinical Trials", value: "FDA", unit: "II", sub: "U.S. & Taiwan FDA Approved" },
                        { label: "Medical Books", value: "700", unit: "+", sub: "Digitized TCAM knowledge" },
                    ].map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="space-y-4 text-center lg:text-left hover:bg-white/5 p-4 rounded-xl transition-colors duration-300">
                                <p className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{stat.label}</p>
                                <div className="flex items-center justify-center lg:justify-start space-x-1">
                                    <span className="text-4xl font-black text-white">{stat.value}</span>
                                    <span className="text-emerald-400 font-bold text-lg">{stat.unit}</span>
                                </div>
                                <p className="text-sm text-emerald-100/70 font-medium">{stat.sub}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 全球通路 - ScrollReveal */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-20">
                        <div className="md:w-1/2">
                            <ScrollReveal>
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
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <div className="flex items-center space-x-8">
                                    <div className="flex flex-col group cursor-default">
                                        <span className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">Amazon US</span>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Official Store</span>
                                    </div>
                                    <div className="h-10 w-px bg-slate-200" />
                                    <div className="flex flex-col group cursor-default">
                                        <span className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">Global</span>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Shipping</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
                            {[
                                { icon: <Globe size={28} />, label: "Global Reach", sub: "Serving international markets" },
                                { icon: <Shield size={28} />, label: "FDA Verified", sub: "Approved clinical standards" },
                                { icon: <Database size={28} />, label: "700+ Books", sub: "Ancient wisdom digitized" },
                                { icon: <Cpu size={28} />, label: "Bio-Tech", sub: "Precision cold extraction" }
                            ].map((item, i) => (
                                <ScrollReveal key={i} delay={0.2 + (i * 0.1)}>
                                    <div className="p-8 bg-emerald-50/50 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg hover:-translate-y-1 hover:bg-emerald-100 transition-all duration-300 text-center cursor-default group">
                                        <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                                        <p className="text-xs text-slate-500 font-medium">{item.sub}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
