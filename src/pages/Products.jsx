import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Beaker,
    Eye,
    Zap,
    Sparkles,
    ExternalLink,
    ArrowRight,
    FlaskConical,
    Cpu,
    Globe,
    X
} from 'lucide-react';

const Products = () => {
    const { t } = useTranslation();

    const categories = [
        {
            id: 'supplements',
            title: "Nutritional Supplements",
            subtitle: "Health & Vitality",
            description: "Scientifically formulated herbal compounds for cognitive, visual, and cardiovascular health.",
            products: [
                {
                    id: 'smart',
                    title: t('products_page.smart_h'),
                    p: t('products_page.smart_p'),
                    img: 'https://www.acamedshop.com.tw/image_good.php?id=22021&s=m' // 益智寧官方圖
                },
                {
                    id: 'bright',
                    title: t('products_page.bright_h'),
                    p: t('products_page.bright_p'),
                    img: 'https://www.acamedshop.com.tw/image_good.php?id=22169&s=m' // 益視寧官方圖
                },
                {
                    id: 'sport',
                    title: t('products_page.sport_h'),
                    p: t('products_page.sport_p'),
                    img: 'https://www.acamedshop.com.tw/image_good.php?id=22038&s=m' // 益心寧官方圖
                },
                {
                    id: 'reishi-sparkling',
                    title: t('products_page.reishi_sparkling_h'),
                    p: t('products_page.reishi_sparkling_p'),
                    img: 'https://www.acamedshop.com.tw/image_good.php?id=25132&s=m' // 鳳凰靈芝氣泡水官方圖
                }
            ]
        },
        {
            id: 'skincare',
            title: "Functional Skincare",
            subtitle: "Anti-Aging Beauty",
            description: "Advanced dermatological solutions infused with rare herbal extracts.",
            products: [
                {
                    id: 'cosmetic',
                    title: t('products_page.cosmetic_h'),
                    p: t('products_page.cosmetic_p'),
                    img: 'https://www.acamedshop.com.tw/image_good.php?id=22196&s=m' // 蘭嵐精華液官方圖
                },
                {
                    id: 'mask',
                    title: t('products_page.mask_h'),
                    p: t('products_page.mask_p'),
                    img: 'https://www.acamedshop.com.tw/image_good.php?id=22023&s=m' // 蘭嵐面膜官方圖
                }
            ]
        }
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            {/* Page Banner */}
            <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img_reishi.jpg"
                        alt="Products Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                        {t('products_page.title')}
                    </h1>
                    <p className="text-lg text-emerald-50 max-w-2xl mx-auto font-medium leading-relaxed">
                        Advanced pharmacological formulations optimized through high-throughput screening and biochemical validation.
                    </p>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">


                <div className="space-y-24">
                    {categories.map((cat) => (
                        <div key={cat.id}>
                            {/* Category Header 縮小 */}
                            <div className="border-b border-slate-200 pb-4 mb-10 flex flex-col md:flex-row md:items-baseline md:gap-4">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    {cat.title}
                                </h2>
                                <span className="text-sm text-slate-500 font-medium">{cat.subtitle}</span>
                            </div>

                            {/* Products Grid - 改為標準網格 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                {cat.products.map((prod) => (
                                    <motion.div
                                        key={prod.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="group flex flex-col h-full cursor-pointer"
                                        onClick={() => setSelectedProduct(prod)}
                                    >
                                        {/* 圖片區域縮小並標準化 */}
                                        <div className="relative overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 aspect-[4/3] mb-6">
                                            <img
                                                src={prod.img}
                                                alt={prod.title}
                                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        </div>

                                        {/* 內容區域縮小 */}
                                        <div className="flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                                                {prod.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                                                {prod.p}
                                            </p>

                                            <div className="mt-auto pt-4 border-t border-slate-100">
                                                <button
                                                    className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedProduct(prod);
                                                    }}
                                                >
                                                    View Details <ArrowRight size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Lightbox Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-slate-500 hover:text-slate-900 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section */}
                            <div className="md:w-1/2 bg-slate-50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
                                <img
                                    src={selectedProduct.img}
                                    alt={selectedProduct.title}
                                    className="max-h-[60vh] md:max-h-full object-contain w-auto drop-shadow-lg"
                                />
                            </div>

                            {/* Info Section */}
                            <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto">
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">
                                    {selectedProduct.title}
                                </h3>

                                <div className="w-12 h-1 bg-primary mb-6"></div>

                                <div className="text-slate-600 space-y-4 leading-relaxed whitespace-pre-line">
                                    {selectedProduct.p}
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
                                    <div className="px-3 py-1 bg-emerald-50 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                        Premium Quality
                                    </div>
                                    <div className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                        FDA Verified
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;
