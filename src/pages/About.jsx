import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { History, Database, Globe, Shield, Microscope } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-lab-gray min-h-screen">
            {/* Banner Section */}
            <div className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-20">
                <AnimatePresence>
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000" // Lab image
                            alt="About Banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/60" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 text-center px-6 pt-20">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                            {t('about_page.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
                            Dedicated to bridging Traditional Chinese Medicine with modern biotechnology to create evidence-based anti-aging solutions.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

                {/* 公司概況：更具學術殿堂感 */}
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-56">
                    <div className="space-y-12">
                        <ScrollReveal>
                            <div className="inline-flex items-center space-x-3 text-secondary bg-secondary/5 px-4 py-2 rounded-lg border border-secondary/10">
                                <History size={18} />
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Founded 2011</span>
                            </div>
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{t('about_page.company_h')}</h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-normal border-l-2 border-slate-100 pl-8">
                                {t('about_page.company_p')}
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 relative group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <Database size={100} />
                                </div>
                                <p className="text-slate-800 text-xl font-bold italic leading-relaxed relative z-10">
                                    "{t('about.quote')}"
                                </p>
                                <div className="flex items-center space-x-4 mt-8 relative z-10">
                                    <div className="w-10 h-px bg-secondary group-hover:w-20 transition-all duration-500" />
                                    <p className="font-black text-[10px] uppercase tracking-widest text-secondary">— {t('about.founder')}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="relative group">
                        <ScrollReveal delay={0.2}>
                            <div className="absolute -inset-4 border border-slate-200 rounded-[4rem] group-hover:border-secondary/20 transition-colors duration-500" />
                            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl relative aspect-[4/5] transform group-hover:rotate-1 transition-transform duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1579154235884-3323098f98df?auto=format&fit=crop&q=80&w=1200"
                                    alt="Scientific Research"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-700" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* 願景與組織架構：網格化科研排版 */}
                <div className="grid md:grid-cols-2 gap-10 mb-56">
                    <ScrollReveal>
                        <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full">
                            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-10 group-hover:bg-secondary group-hover:text-white transition-colors duration-500 group-hover:scale-110">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{t('about_page.vision_h')}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{t('about_page.vision_p')}</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="bg-secondary p-16 rounded-[3rem] shadow-2xl shadow-secondary/40 group relative overflow-hidden h-full hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700 group-hover:scale-125">
                                <Shield size={120} className="text-white" />
                            </div>
                            <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-white group-hover:text-secondary transition-colors duration-500">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{t('about_page.org_h')}</h3>
                            <p className="text-white/90 font-medium leading-relaxed">{t('about_page.org_p')}</p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* 領導團隊：大氣科研封面風格 */}
                <ScrollReveal>
                    <div className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden p-16 lg:p-32 shadow-2xl relative group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-shadow duration-700">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-lab-gray skew-x-12 translate-x-1/2 group-hover:translate-x-[45%] transition-transform duration-1000" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-24 items-center">
                            <div className="w-64 h-64 rounded-[2.5rem] bg-secondary flex flex-col items-center justify-center p-8 text-center shadow-2xl group-hover:scale-105 transition-transform duration-500 ring-4 ring-white">
                                <Microscope size={60} className="text-white mb-4 opacity-80" />
                                <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase opacity-60">CSO / President</span>
                            </div>
                            <div className="flex-1 space-y-10 text-center md:text-left">
                                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">{t('about_page.leadership_h')}</h2>
                                <p className="text-xl text-slate-500 leading-relaxed font-normal border-l-4 border-secondary pl-10 md:text-left text-left group-hover:border-emerald-400 transition-colors duration-500">
                                    {t('about_page.leadership_p')}
                                </p>
                                <div className="flex items-center justify-center md:justify-start space-x-10 pt-6">
                                    <div className="px-6 py-3 bg-secondary/10 border border-secondary/20 rounded-xl group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <span className="text-xs font-black text-secondary group-hover:text-white uppercase tracking-widest">NYMU Scientist</span>
                                    </div>
                                    <div className="px-6 py-3 bg-slate-100 border border-slate-200 rounded-xl">
                                        <span className="text-xs font-black text-slate-600 uppercase tracking-widest">40+ Years Research</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default About;
