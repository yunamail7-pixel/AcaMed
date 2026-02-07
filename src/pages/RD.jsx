import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Layers,
    Cpu,
    FlaskConical,
    Microscope,
    Beaker,
    Zap,
    FileText
} from 'lucide-react';

import ScrollReveal from '../components/ScrollReveal';

const RD = () => {
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
                            src="/rd_banner.png"
                            alt="R&D Banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/60" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
                    <ScrollReveal>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                            {t('rd_page.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-50 font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                            Advancing the molecular frontline of herbal pharmacology through precision cold-extraction and high-resolution chemical profiling.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 pb-40">

                {/* 低溫萃取技術：更有原理圖感 */}
                <div className="flex flex-col lg:flex-row gap-32 items-center mb-48">
                    <div className="flex-1 space-y-12">
                        <ScrollReveal>
                            <div className="inline-flex items-center space-x-3 text-secondary bg-secondary/5 px-4 py-2 rounded-lg border border-secondary/10">
                                <Layers size={20} />
                                <span className="text-xs font-mono font-bold uppercase tracking-widest">Protocol: 99.7% Purity</span>
                            </div>
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{t('rd_page.tech_h')}</h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-normal border-l-2 border-slate-100 pl-8">
                                {t('rd_page.tech_p')}
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <ScrollReveal delay={0.2}>
                                <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-2 cursor-default group">
                                    <h4 className="text-slate-400 text-[10px] font-black uppercase mb-3 tracking-widest group-hover:text-secondary transition-colors">Molecular Integrity</h4>
                                    <p className="text-2xl font-black text-slate-900 group-hover:scale-110 origin-left transition-transform duration-300">99.7%</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4}>
                                <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-2 cursor-default group">
                                    <h4 className="text-slate-400 text-[10px] font-black uppercase mb-3 tracking-widest group-hover:text-red-500 transition-colors">Thermal Damage</h4>
                                    <p className="text-2xl font-black text-slate-900 group-hover:scale-110 origin-left transition-transform duration-300">0.0%</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6 relative">
                        <div className="absolute inset-0 bg-secondary/5 blur-[100px] -z-10 animate-pulse-slow" />
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-6">
                                <div className="bg-white aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10 border border-slate-100 hover:scale-105 transition-transform duration-500">
                                    <FlaskConical size={64} className="text-secondary opacity-60" />
                                </div>
                                <div className="bg-secondary aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10 hover:scale-105 transition-transform duration-500 hover:brightness-110">
                                    <Beaker size={64} className="text-white opacity-60" />
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.4}>
                            <div className="space-y-6 mt-12">
                                <div className="bg-secondary aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10 hover:scale-105 transition-transform duration-500 hover:brightness-110">
                                    <Cpu size={64} className="text-white opacity-60" />
                                </div>
                                <div className="bg-white aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10 border border-slate-100 hover:scale-105 transition-transform duration-500">
                                    <Layers size={64} className="text-secondary opacity-60" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* 科學驗證：更有實驗報告感 */}
                <ScrollReveal>
                    <div className="bg-white rounded-[4rem] p-20 lg:p-32 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden mb-48 hover:shadow-[0_48px_80px_-16px_rgba(6,78,59,0.1)] transition-shadow duration-700">
                        <div className="absolute top-0 right-0 p-10 flex flex-col items-end space-y-2 opacity-10">
                            <div className="w-20 h-2 bg-slate-900" />
                            <div className="w-12 h-2 bg-slate-400" />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-32 items-center">
                            <div className="flex-1 order-2 lg:order-1">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-10 bg-lab-gray rounded-[2rem] border border-slate-100 group hover:border-secondary transition-colors hover:bg-white hover:shadow-lg duration-300">
                                        <div className="mb-6 text-secondary group-hover:scale-110 transition-transform"><Microscope size={32} /></div>
                                        <h4 className="font-bold text-slate-900 mb-2">High Resolution</h4>
                                        <p className="text-sm text-slate-400 font-medium">HPLC/SFC chemical profiling for active compound consistency.</p>
                                    </div>
                                    <div className="p-10 bg-lab-gray rounded-[2rem] border border-slate-100 group hover:border-secondary transition-colors hover:bg-white hover:shadow-lg duration-300">
                                        <div className="mb-6 text-secondary group-hover:scale-110 transition-transform"><FileText size={32} /></div>
                                        <h4 className="font-bold text-slate-900 mb-2">Peer Reviewed</h4>
                                        <p className="text-sm text-slate-400 font-medium">Published in British Journal of Pharmacology & Neuropharmacology.</p>
                                    </div>
                                    <div className="col-span-2 p-10 bg-secondary text-white rounded-[2rem] flex justify-between items-center group hover:bg-emerald-800 transition-colors cursor-default shadow-xl shadow-secondary/20">
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">NYMU Collaboration</h4>
                                            <p className="text-white/80 text-sm">Research Center for Drug Discovery alignment.</p>
                                        </div>
                                        <div className="p-4 bg-white/20 rounded-full group-hover:rotate-12 transition-transform"><Zap className="text-white" size={24} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 order-1 lg:order-2 space-y-10">
                                <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{t('rd_page.research_h')}</h2>
                                <p className="text-xl text-slate-500 leading-relaxed font-normal">
                                    {t('rd_page.research_p')}
                                </p>
                                <div className="flex items-center space-x-12 pt-6">
                                    <div className="group cursor-default">
                                        <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-2 group-hover:text-emerald-700 transition-colors">U.S. FDA</p>
                                        <p className="text-2xl font-black text-slate-900 group-hover:scale-110 origin-left transition-transform">Phase II</p>
                                    </div>
                                    <div className="h-10 w-px bg-slate-100" />
                                    <div className="group cursor-default">
                                        <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-2 group-hover:text-emerald-700 transition-colors">TCAM DB</p>
                                        <p className="text-2xl font-black text-slate-900 group-hover:scale-110 origin-left transition-transform">700+ Bks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 研發管線：展示 Pipeline 資訊 */}
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{t('rd_page.pipeline_h')}</h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            {t('rd_page.pipeline_p')}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="p-10 border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-white hover:border-secondary/50 transition-colors duration-500 group">
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-black text-slate-900 uppercase tracking-widest text-xs">Project: ACAMAX-001</span>
                                <span className="px-4 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">In Progress</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "66%" }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    className="bg-secondary h-full relative"
                                >
                                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white/50 to-transparent" />
                                </motion.div>
                            </div>
                            <div className="flex justify-between mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span className="text-emerald-600">Discovery</span>
                                <span className="text-emerald-600">Pre-clinical</span>
                                <span className="text-secondary scale-110 origin-center">Clinical II</span>
                                <span>Market</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default RD;
