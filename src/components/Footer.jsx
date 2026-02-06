import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, ExternalLink, Mail, MapPin, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-primary text-white pt-32 pb-16 relative overflow-hidden">
            {/* 裝飾性背景元素 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-20 mb-32 relative z-10">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center space-x-4 mb-10">
                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl text-slate-900 font-black text-2xl shadow-2xl">A</div>
                        <span className="text-3xl font-black tracking-tighter">
                            AcaMed <span className="text-secondary italic font-light">Pharma</span>
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium opacity-80 max-w-xs">
                        {t('footer.desc')}
                    </p>
                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-3">
                            <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/40 hover:text-white">
                                <Facebook size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/40 hover:text-white">
                                <Instagram size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/40 hover:text-white">
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary mb-10">{t('footer.nav')}</h4>
                    <ul className="space-y-4 text-slate-400 font-bold text-[10px] tracking-widest uppercase">
                        <li><NavLink to="/" className="hover:text-white transition-colors">{t('nav.home')}</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-white transition-colors">{t('nav.about')}</NavLink></li>
                        <li><NavLink to="/products" className="hover:text-white transition-colors">{t('nav.products')}</NavLink></li>
                        <li><NavLink to="/rd" className="hover:text-white transition-colors">{t('nav.rd')}</NavLink></li>
                        <li><a href="https://www.amazon.com/stores/page/914B4FB0-A22A-4794-A9D1-465DECA1B26E?ingress=3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('nav.stories')}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary mb-10">{t('footer.eco')}</h4>
                    <ul className="space-y-4 text-slate-400 font-bold text-[10px] tracking-widest uppercase">
                        <li><a href="https://www.amazon.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center">Amazon Global <ExternalLink size={12} className="ml-2 opacity-30" /></a></li>
                        <li><a href="#" className="hover:text-white transition-colors">AcaHealth Pharma</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">NYMU Research Hub</a></li>
                        <li><a href="#" className="hover:text-white transition-colors flex items-center text-emerald-500"><ShieldCheck size={14} className="mr-2" /> Verified Supply</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-secondary mb-10">{t('footer.contact')}</h4>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <MapPin size={18} className="text-secondary mt-1 shrink-0" />
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-wider leading-relaxed">Taipei City, Taiwan (R.O.C.)</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail size={18} className="text-secondary mt-1 shrink-0" />
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-wider">service@acamed.com.tw</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-black tracking-[0.4em] text-slate-500 uppercase">
                <p>{t('footer.rights')}</p>
                <div className="flex space-x-10 mt-8 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Pharmacology Disclaimer</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
