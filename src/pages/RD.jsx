import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layers, Cpu, FlaskRound, Microscope, Beaker, Zap, FileText } from 'lucide-react';

const RD = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-56 pb-40 bg-lab-gray bg-grid-pattern min-h-screen">
            <div className="max-w-7xl mx-auto px-10">
                <header className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-4 mb-10"
                    >
                        <span className="h-px w-12 bg-secondary" />
                        <span className="text-[11px] font-mono font-bold text-secondary tracking-[0.4em] uppercase">Core Technology</span>
                    </motion.div>
                    <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter text-slate-900">{t('rd_page.title')}</h1>
                    <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                        Advancing the molecular frontline of herbal pharmacology through precision cold-extraction and high-resolution chemical profiling.
                    </p>
                </header>

                {/* 低溫萃取技術：更有原理圖感 */}
                <div className="flex flex-col lg:flex-row gap-32 items-center mb-48">
                    <div className="flex-1 space-y-12">
                        <div className="inline-flex items-center space-x-3 text-secondary bg-secondary/5 px-4 py-2 rounded-lg border border-secondary/10">
                            <Layers size={20} />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest">Protocol: 99.7% Purity</span>
                        </div>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{t('rd_page.tech_h')}</h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-normal border-l-2 border-slate-100 pl-8">
                            {t('rd_page.tech_p')}
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <h4 className="text-slate-400 text-[10px] font-black uppercase mb-3 tracking-widest">Molecular Integrity</h4>
                                <p className="text-2xl font-black text-slate-900">99.7%</p>
                            </div>
                            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <h4 className="text-slate-400 text-[10px] font-black uppercase mb-3 tracking-widest">Thermal Damage</h4>
                                <p className="text-2xl font-black text-slate-900">0.0%</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6 relative">
                        <div className="absolute inset-0 bg-secondary/5 blur-[100px] -z-10" />
                        <div className="space-y-6">
                            <div className="bg-white aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10 border border-slate-100">
                                <FlaskConical size={64} className="text-secondary opacity-60" />
                            </div>
                            <div className="bg-slate-900 aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10">
                                <Beaker size={64} className="text-white opacity-60" />
                            </div>
                        </div>
                        <div className="space-y-6 mt-12">
                            <div className="bg-secondary aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10">
                                <Cpu size={64} className="text-white opacity-60" />
                            </div>
                            <div className="bg-white aspect-square rounded-[2.5rem] shadow-2xl flex items-center justify-center p-10 border border-slate-100">
                                <Layers size={64} className="text-secondary opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 科學驗證：更有實驗報告感 */}
                <div className="bg-white rounded-[4rem] p-20 lg:p-32 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 flex flex-col items-end space-y-2 opacity-10">
                        <div className="w-20 h-2 bg-slate-900" />
                        <div className="w-12 h-2 bg-slate-400" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-32 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-10 bg-lab-gray rounded-[2rem] border border-slate-100 group hover:border-secondary transition-colors">
                                    <div className="mb-6 text-secondary"><Microscope /></div>
                                    <h4 className="font-bold text-slate-900 mb-2">High Resolution</h4>
                                    <p className="text-sm text-slate-400 font-medium">HPLC/SFC chemical profiling for active compound consistency.</p>
                                </div>
                                <div className="p-10 bg-lab-gray rounded-[2rem] border border-slate-100 group hover:border-secondary transition-colors">
                                    <div className="mb-6 text-secondary"><FileText /></div>
                                    <h4 className="font-bold text-slate-900 mb-2">Peer Reviewed</h4>
                                    <p className="text-sm text-slate-400 font-medium">Published in British Journal of Pharmacology & Neuropharmacology.</p>
                                </div>
                                <div className="col-span-2 p-10 bg-slate-900 text-white rounded-[2rem] flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">NYMU Collaboration</h4>
                                        <p className="text-slate-400 text-sm">Research Center for Drug Discovery alignment.</p>
                                    </div>
                                    <NavLink to="/about" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all"><ArrowRight /></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2 space-y-10">
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">{t('rd_page.research_h')}</h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-normal">
                                {t('rd_page.research_p')}
                            </p>
                            <div className="flex items-center space-x-12 pt-6">
                                <div>
                                    <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-2">U.S. FDA</p>
                                    <p className="text-2xl font-black text-slate-900">Phase II</p>
                                </div>
                                <div className="h-10 w-px bg-slate-100" />
                                <div>
                                    <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-2">TCAM DB</p>
                                    <p className="text-2xl font-black text-slate-900">700+ Bks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RD;
