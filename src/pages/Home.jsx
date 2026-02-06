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
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000", // 科研試管與實驗室
            tag: t('home.hero_tag'),
            title: t('home.hero_title'),
            subtitle: t('home.hero_subtitle'),
            desc: t('home.hero_desc'),
        },
        {
            image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=2000", // 實驗室玻璃器皿與數據感 (已修正連結)
            tag: "Scientific Validation",
            title: "Multi-Targeted",
            subtitle: "Precision Herbalism",
            desc: "Bridging 2000 years of TCM wisdom with modern high-throughput screening and multi-targeted pharmacological analysis.",
        },
        {
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000", // 現代化顯微鏡與分析
            tag: "Quality Control",
            title: "Fingerprint Tech",
            subtitle: "Chemical Consistency",
            desc: "Leveraging electronic databases of 700+ medical books to ensure raw material purity via advanced chemical fingerprinting.",
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
        <div className="overflow-x-hidden bg-lab-gray bg-grid-pattern">
            {/* 核心英雄區塊：更有科研純淨感 */}
            <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-slate-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} // 讓背景圖片完全不透明，清晰顯示
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={slides[currentSlide].image}
                            alt="Background"
                            className="w-full h-full object-cover opacity-80" // 微調圖片本身透明度
                        />
                        {/* 降低漸層覆蓋濃度，讓圖片細節展現出來 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/40 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* 裝飾性科研元素：掃描線與座標 */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-10 w-24 h-24 border-l border-t border-secondary/30 opacity-40" />
                    <div className="absolute bottom-1/4 right-10 w-24 h-24 border-r border-b border-secondary/30 opacity-40" />
                    <motion.div
                        animate={{ y: ["0%", "100%", "0%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 right-0 h-px bg-secondary/10 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl text-white"
                        >
                            <div className="inline-flex items-center space-x-3 mb-10">
                                <span className="h-px w-8 bg-secondary" />
                                <span className="text-[11px] font-mono font-bold text-secondary tracking-[0.3em] uppercase">
                                    {slides[currentSlide].tag}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter">
                                {slides[currentSlide].title} <br />
                                <span className="text-secondary opacity-90">{slides[currentSlide].subtitle}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-medium border-l-2 border-secondary/30 pl-8">
                                {slides[currentSlide].desc}
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8">
                                <NavLink to="/products" className="btn-primary flex items-center justify-center space-x-3 group">
                                    <span>{t('home.cta_products')}</span>
                                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                </NavLink>
                                <NavLink to="/about" className="flex items-center justify-center space-x-3 px-10 py-5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all font-black uppercase tracking-widest text-[10px] backdrop-blur-sm">
                                    <span>{t('home.cta_more')}</span>
                                    <Database size={16} className="text-secondary" />
                                </NavLink>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 輪播進度與控制 */}
                <div className="absolute bottom-16 left-8 z-30 flex items-end space-x-12">
                    <div className="flex flex-col space-y-4">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className="group flex items-center space-x-4"
                            >
                                <span className={`text-[10px] font-mono transition-colors ${currentSlide === i ? 'text-secondary' : 'text-slate-500'}`}>0{i + 1}</span>
                                <div className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? 'w-12 bg-secondary' : 'w-4 bg-slate-700 group-hover:bg-slate-500'}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 科研實力數據區塊 */}
            <section className="py-40 relative z-10 border-b border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {[
                        { label: "Extraction Purity", value: "99.7", unit: "%", sub: "Cold-extraction accuracy" },
                        { label: "Research History", value: "40", unit: "+", sub: "Years of Professor Wu's R&D" },
                        { label: "Clinical Trials", value: "FDA", unit: "II", sub: "U.S. & Taiwan FDA Approved" },
                        { label: "Medical Books", value: "700", unit: "+", sub: "Digitized TCAM knowledge" },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-4">
                            <p className="text-[10px] font-black text-secondary tracking-widest uppercase">{stat.label}</p>
                            <div className="flex items-baseline space-x-1">
                                <span className="stat-value text-slate-900">{stat.value}</span>
                                <span className="text-secondary font-bold">{stat.unit}</span>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 現代化中藥 R&D 區塊 */}
            <section className="py-48 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-32 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl opacity-50" />
                        <h2 className="text-sm font-black text-secondary tracking-[0.4em] uppercase mb-10 flex items-center">
                            <span className="w-8 h-px bg-secondary mr-4" />
                            Modernizing Medicine
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[1.1]">
                            The standard of <br />
                            <span className="text-secondary italic">scientific herbalism.</span>
                        </h3>
                        <p className="text-xl text-slate-500 mb-16 font-medium leading-relaxed max-w-xl">
                            We don't manufacture; we decode. By applying pharmaceutical-grade rigor to traditional herbs, Changan Biotech creates the next generation of precision health solutions.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {[
                                { icon: <Beaker size={24} />, title: "Cold Extraction", text: "Zero-heat isolation." },
                                { icon: <Cpu size={24} />, title: "Precision", text: "Targeted molecular delivery." },
                                { icon: <Shield size={24} />, title: "Quality", text: "Chemical consistency check." },
                                { icon: <Leaf size={24} />, title: "Herbal Roots", text: "2000 years of clinical history." }
                            ].map((item, i) => (
                                <li key={i} className="flex space-x-6 items-start">
                                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                        <p className="text-slate-400 text-sm font-medium">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 border border-secondary/20 translate-x-10 translate-y-10 rounded-3xl" />
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1579165466541-74e24690554a?auto=format&fit=crop&q=80&w=1200"
                                alt="Modern Pharma Lab"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s]"
                            />
                            <div className="absolute inset-x-8 bottom-8 p-10 glass-morphism rounded-2xl border-l-4 border-secondary">
                                <p className="text-slate-900 font-bold italic leading-relaxed">
                                    "Innovation is the bridge connecting the roots of the past with the health of the future."
                                </p>
                                <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-secondary">— Professor Wu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
