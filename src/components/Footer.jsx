import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, ExternalLink, Mail, MapPin, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';
import logo from '../assets/logo.png';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-primary text-white pt-32 pb-16 relative overflow-hidden">
            {/* 裝飾性背景元素 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute top-24 left-10 w-32 h-32 bg-emerald-400/5 rounded-full blur-[50px] animate-pulse-slow" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-20 mb-32 relative z-10">
                <div className="col-span-1 md:col-span-1">
                    <ScrollReveal>
                        <div className="flex items-center space-x-4 mb-10">
                            <img
                                src={logo}
                                alt="AcaMed Logo"
                                className="h-16 w-auto object-contain brightness-0 invert hover:opacity-80 transition-opacity duration-300"
                            />
                        </div>
                        <p className="text-slate-200 text-base leading-relaxed mb-10 font-medium opacity-90 max-w-xs">
                            {t('footer.desc')}
                        </p>
                        <div className="flex items-center space-x-6">
                            <div className="flex space-x-3">
                                <button className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 text-white/60 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30">
                                    <Facebook size={20} />
                                </button>
                                <button className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 text-white/60 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-600/30">
                                    <Instagram size={20} />
                                </button>
                                <button className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 text-white/60 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30">
                                    <Mail size={20} />
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div>
                    <ScrollReveal delay={0.1}>
                        <h4 className="text-sm font-black tracking-[0.2em] uppercase text-secondary mb-8">{t('footer.nav')}</h4>
                        <ul className="space-y-4 text-slate-300 font-bold text-sm tracking-widest uppercase">
                            <li><NavLink to="/" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{t('nav.home')}</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{t('nav.about')}</NavLink></li>
                            <li><NavLink to="/products" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{t('nav.products')}</NavLink></li>
                            <li><NavLink to="/rd" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{t('nav.rd')}</NavLink></li>
                            <li><a href="https://www.amazon.com/stores/AcaMed/page/914B4FB0-A22A-4794-A9D1-465DECA1B26E" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{t('nav.stories')}</a></li>
                        </ul>
                    </ScrollReveal>
                </div>

                <div>
                    <ScrollReveal delay={0.2}>
                        <h4 className="text-sm font-black tracking-[0.2em] uppercase text-secondary mb-8">{t('footer.eco')}</h4>
                        <ul className="space-y-4 text-slate-300 font-bold text-sm tracking-widest uppercase">
                            <li><a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">Amazon Global <ExternalLink size={14} className="ml-2 opacity-50" /></a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">AcaHealth Pharma</a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">NYMU Research Hub</a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center text-emerald-400"><ShieldCheck size={16} className="mr-2" /> Verified Supply</a></li>
                        </ul>
                    </ScrollReveal>
                </div>

                <div>
                    <ScrollReveal delay={0.3}>
                        <h4 className="text-sm font-black tracking-[0.2em] uppercase text-secondary mb-8">{t('footer.contact')}</h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group cursor-default">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                                    <MapPin size={20} className="text-secondary shrink-0" />
                                </div>
                                <p className="text-slate-300 font-bold text-sm uppercase tracking-wider leading-relaxed group-hover:text-white transition-colors">Taipei City, Taiwan (R.O.C.)</p>
                            </div>
                            <div className="flex items-start space-x-4 group cursor-default">
                                <div className="p-2 bg-white/5 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                                    <Mail size={20} className="text-secondary shrink-0" />
                                </div>
                                <p className="text-slate-300 font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors">service@acamed.com.tw</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                <p className="hover:text-emerald-400 transition-colors cursor-default">{t('footer.rights')}</p>
                <div className="flex space-x-10 mt-8 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors hover:underline decoration-secondary decoration-2 underline-offset-4">Pharmacology Disclaimer</a>
                    <a href="#" className="hover:text-white transition-colors hover:underline decoration-secondary decoration-2 underline-offset-4">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors hover:underline decoration-secondary decoration-2 underline-offset-4">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
