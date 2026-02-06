import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { History, Microscope, Rocket, Award, BarChart3, Database } from 'lucide-react';

const Stories = () => {
    const { t } = useTranslation();

    const timeline = [
        { year: '2011', text: 'Foundation of AcaMed Pharma & Biotech Co., Ltd.' },
        { year: '2012', text: 'Publication on SmarT-101 in Neuropharmacology' },
        { year: '2013', text: 'Publication on SporT-101 in British Journal of Pharmacology' },
        { year: '2014', text: 'Launch of Dietary Supplement Line' },
        { year: '2017', text: 'Acquisition of Orchid Anti-aging Technology' },
        { year: '2020', text: 'Global Expansion to Amazon U.S. and Rakuten Japan' }
    ];

    return (
        <div className="bg-lab-gray min-h-screen">
            {/* Banner Section */}
            <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2000" // History / Library / Lab mix
                        alt="Stories Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            {t('stories_page.title')}
                        </h1>
                        <p className="text-lg text-emerald-50 max-w-2xl mx-auto font-medium leading-relaxed">
                            Tracing our roots from academic research to international recognition, driven by a commitment to purity and efficacy.
                        </p>
                    </motion.div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

                {/* 發展歷程：更具科研儀表盤感 */}
                <div className="mb-56 grid lg:grid-cols-3 gap-20">
                    <div className="col-span-1 border-r border-slate-100 pr-10">
                        <h2 className="text-3xl font-black mb-8 flex items-center gap-4 text-slate-900">
                            <div className="p-3 bg-secondary text-white rounded-xl"><History size={20} /></div>
                            {t('stories_page.history_h')}
                        </h2>
                        <p className="text-slate-500 font-medium leading-relaxed italic">
                            A track record of translating academic breakthroughs into clinical reality.
                        </p>
                    </div>
                    <div className="col-span-2 relative pl-10 border-l border-slate-100 ml-[-1px]">
                        <div className="space-y-20 relative z-10">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative flex items-start group"
                                >
                                    <div className="absolute -left-[54px] top-2 w-7 h-7 rounded-full bg-white border border-slate-200 z-10 flex items-center justify-center group-hover:border-secondary transition-colors duration-500">
                                        <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-secondary transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[10px] font-mono font-black text-secondary tracking-[0.3em] mb-4 block">EVOL: {item.year}</span>
                                        <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight transition-colors group-hover:text-secondary">{item.text}</h3>
                                        <div className="h-px w-0 bg-slate-100 group-hover:w-full transition-all duration-1000" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 創辦人故事：更有科研紀錄片質感 */}
                <div className="bg-white border border-slate-100 rounded-[4rem] p-16 lg:p-32 flex flex-col lg:flex-row gap-32 items-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
                    <div className="flex-1 space-y-12 relative z-10">
                        <div className="inline-flex items-center space-x-3 text-secondary bg-secondary/5 px-4 py-2 rounded-lg border border-secondary/10">
                            <Award size={18} />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Scientific Visionary</span>
                        </div>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{t('stories_page.founder_h')}</h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-normal italic border-l-4 border-secondary pl-10">
                            {t('stories_page.founder_p')}
                        </p>
                        <p className="text-slate-500 font-medium leading-relaxed">
                            AcaMed, derived from the core R&D heritage of National Yang-Ming University, represents Professor Wu's ultimate mission: to decode life through nature's complex biological signatures.
                        </p>
                        <div className="flex space-x-12 pt-10">
                            <div className="space-y-2">
                                <div className="flex items-baseline space-x-2">
                                    <span className="stat-value text-slate-900">40</span>
                                    <span className="text-secondary font-bold font-mono">Yr</span>
                                </div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Research Depth</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline space-x-2">
                                    <span className="stat-value text-slate-900">50</span>
                                    <span className="text-secondary font-bold font-mono">+</span>
                                </div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Scientific Papers</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline space-x-2">
                                    <div className="stat-value text-slate-900">FDA</div>
                                </div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Regulatory Standards</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative group lg:max-w-md">
                        <div className="absolute -inset-4 border border-slate-200 rounded-[3rem] group-hover:border-secondary/20 transition-all duration-700 blur-sm opacity-50" />
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[3/4] bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71f1e598c6?auto=format&fit=crop&q=80&w=1000"
                                alt="Scientific Rigor"
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply pointer-events-none" />
                            <div className="absolute inset-x-8 bottom-8 p-10 glass-morphism rounded-2xl border-l-4 border-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="flex items-center space-x-4 mb-4 text-secondary">
                                    <Microscope size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Active Research Zone</span>
                                </div>
                                <p className="text-slate-900 font-bold text-sm leading-relaxed">
                                    "Precision begins with an unwavering commitment to biological truth."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stories;
