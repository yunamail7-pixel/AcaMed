import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Globe, Award, Database, Microscope, History } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-lab-gray min-h-screen">
            {/* Banner Section */}
            <div className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000" // Lab image
                        alt="About Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 text-center px-6 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                            {t('about_page.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
                            Dedicated to bridging Traditional Chinese Medicine with modern biotechnology to create evidence-based anti-aging solutions.
                        </p>
                    </motion.div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

                {/* 公司概況：更具學術殿堂感 */}
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-56">
                    <div className="space-y-12">
                        <div className="inline-flex items-center space-x-3 text-secondary bg-secondary/5 px-4 py-2 rounded-lg border border-secondary/10">
                            <History size={18} />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Founded 2011</span>
                        </div>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{t('about_page.company_h')}</h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-normal border-l-2 border-slate-100 pl-8">
                            {t('about_page.company_p')}
                        </p>
                        <div className="p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Database size={100} />
                            </div>
                            <p className="text-slate-800 text-xl font-bold italic leading-relaxed relative z-10">
                                "{t('about.quote')}"
                            </p>
                            <div className="flex items-center space-x-4 mt-8 relative z-10">
                                <div className="w-10 h-px bg-secondary" />
                                <p className="font-black text-[10px] uppercase tracking-widest text-secondary">— {t('about.founder')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-slate-200 rounded-[4rem] group-hover:border-secondary/20 transition-colors duration-500" />
                        <div className="rounded-[3.5rem] overflow-hidden shadow-2xl relative aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1579154235884-3323098f98df?auto=format&fit=crop&q=80&w=1200"
                                alt="Scientific Research"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                            />
                            <div className="absolute inset-0 bg-slate-900/10" />
                        </div>
                    </div>
                </div>

                {/* 願景與組織架構：網格化科研排版 */}
                <div className="grid md:grid-cols-2 gap-10 mb-56">
                    <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-10 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{t('about_page.vision_h')}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">{t('about_page.vision_p')}</p>
                    </div>
                    <div className="bg-secondary p-16 rounded-[3rem] shadow-2xl shadow-secondary/40 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                            <Shield size={120} className="text-white" />
                        </div>
                        <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{t('about_page.org_h')}</h3>
                        <p className="text-white/90 font-medium leading-relaxed">{t('about_page.org_p')}</p>
                    </div>
                </div>

                {/* 領導團隊：大氣科研封面風格 */}
                <div className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden p-16 lg:p-32 shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-lab-gray skew-x-12 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-24 items-center">
                        <div className="w-64 h-64 rounded-[2.5rem] bg-secondary flex flex-col items-center justify-center p-8 text-center shadow-2xl">
                            <Microscope size={60} className="text-secondary mb-4 opacity-80" />
                            <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase opacity-40">CSO / President</span>
                        </div>
                        <div className="flex-1 space-y-10">
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">{t('about_page.leadership_h')}</h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-normal border-l-4 border-secondary pl-10">
                                {t('about_page.leadership_p')}
                            </p>
                            <div className="flex items-center space-x-10 pt-6">
                                <div className="px-6 py-3 bg-secondary/10 border border-secondary/20 rounded-xl">
                                    <span className="text-xs font-black text-secondary uppercase tracking-widest">NYMU Scientist</span>
                                </div>
                                <div className="px-6 py-3 bg-slate-100 border border-slate-200 rounded-xl">
                                    <span className="text-xs font-black text-slate-600 uppercase tracking-widest">40+ Years Research</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
