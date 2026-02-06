import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Beaker, Eye, Zap, Sparkles, ExternalLink, ArrowRight, FlaskConical, Cpu } from 'lucide-react';

const Products = () => {
    const { t } = useTranslation();

    const productList = [
        {
            id: 'smart',
            title: t('products_page.smart_h'),
            p: t('products_page.smart_p'),
            icon: <Cpu className="text-secondary" />,
            accent: 'bg-secondary/5',
            img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'bright',
            title: t('products_page.bright_h'),
            p: t('products_page.bright_p'),
            icon: <Eye className="text-emerald-500" />,
            accent: 'bg-emerald-500/5',
            img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'sport',
            title: t('products_page.sport_h'),
            p: t('products_page.sport_p'),
            icon: <Zap className="text-amber-500" />,
            accent: 'bg-amber-500/5',
            img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'cosmetic',
            title: t('products_page.cosmetic_h'),
            p: t('products_page.cosmetic_p'),
            icon: <Sparkles className="text-purple-500" />,
            accent: 'bg-purple-500/5',
            img: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className="pt-56 pb-40 bg-lab-gray bg-grid-pattern min-h-screen">
            <section className="max-w-7xl mx-auto px-10">
                <div className="max-w-4xl mb-40 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-4 mb-10"
                    >
                        <span className="h-px w-12 bg-secondary" />
                        <span className="text-[11px] font-mono font-bold text-secondary tracking-[0.4em] uppercase">Product Portfolio</span>
                    </motion.div>
                    <h1 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter leading-none text-slate-900">
                        {t('products_page.title')}
                    </h1>
                    <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                        Advanced pharmacological formulations optimized through high-throughput screening and biochemical validation.
                    </p>
                </div>

                <div className="space-y-40">
                    {productList.map((prod, i) => (
                        <motion.div
                            key={prod.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-center`}
                        >
                            <div className="flex-1 w-full relative group">
                                <div className="absolute -inset-4 border border-slate-200 rounded-[3rem] group-hover:border-secondary/20 transition-colors duration-500" />
                                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/3] bg-slate-100">
                                    <img
                                        src={prod.img}
                                        alt={prod.title}
                                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2.5s] ease-out opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-10">
                                <div className="flex items-center space-x-6">
                                    <div className={`w-14 h-14 ${prod.accent} rounded-xl flex items-center justify-center border border-slate-200/50 backdrop-blur-sm`}>
                                        {prod.icon}
                                    </div>
                                    <span className="text-xs font-mono font-bold text-slate-400 tracking-widest uppercase">CAT: 00{i + 1}</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">{prod.title}</h2>
                                <p className="text-xl text-slate-500 leading-relaxed font-normal border-l-2 border-slate-100 pl-8">
                                    {prod.p}
                                </p>
                                <div className="pt-6">
                                    <button className="flex items-center space-x-6 bg-slate-900 text-white px-12 py-6 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] hover:bg-secondary transition-all shadow-2xl active:scale-95 group">
                                        <span>Full Specifications</span>
                                        <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 底部行動呼籲：更具科研基座感 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-60 p-20 md:p-32 bg-white rounded-[4rem] text-slate-900 relative overflow-hidden border border-slate-100 shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-grid-pattern" />
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <div className="inline-block p-4 bg-secondary/10 text-secondary rounded-2xl mb-12"><Globe size={32} /></div>
                        <h3 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tighter">Global Hub</h3>
                        <p className="text-xl text-slate-400 mb-16 font-medium leading-relaxed">
                            Expanding precision biotherapeutics across global markets. Licensed distributions available through verified pharmaceutical channels.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <button className="w-full sm:w-auto px-14 py-6 bg-slate-900 text-white font-black rounded-xl hover:bg-secondary transition-all shadow-xl tracking-widest text-[10px] uppercase">Amazon U.S.</button>
                            <button className="w-full sm:w-auto px-14 py-6 bg-white border border-slate-200 text-slate-900 font-black rounded-xl hover:bg-slate-50 transition-all tracking-widest text-[10px] uppercase">Rakuten Japan</button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Products;
