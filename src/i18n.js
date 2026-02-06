import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: { home: "Home", about: "About Us", products: "Products", rd: "R&D", stories: "Stories", news: "News", contact: "Contact" },
            home: {
                hero_tag: "Originating from National Yang-Ming University",
                hero_title: "Precision Herbal Extraction",
                hero_subtitle: "Scientific Anti-aging Solutions",
                hero_desc: "AcaMed Pharma leads global anti-aging research, combining state-of-the-art Cold Extraction Technology with rigorous academic expertise to transform nature's essence into superior health solutions.",
                cta_more: "Learn More",
                cta_products: "View Products"
            },
            about_page: {
                title: "About AcaMed",
                company_h: "Our Company",
                company_p: "AcaMed Pharma & Biotech Company was founded by Professor & Director Rong-Tsun Wu in 2011, derived from the Research Center for Drug Discovery, National Yang-Ming University. We focus on developing anti-aging herbal products and high-quality dietary supplements.",
                vision_h: "Our Vision",
                vision_p: "Utilizing the 2000-year history of Traditional Chinese Herbs (TCAM) for anti-aging. We have established an electronic database of over 700 Chinese medicinal books and a high-tech cultivation platform to ensure the purest ingredients.",
                org_h: "Organization",
                org_p: "AcaMed is a 100% daughter company of AcaHealth Pharma & Biotech (founded in 2009), specialized in the R&D of natural health products.",
                leadership_h: "Leadership",
                leadership_p: "President & CSO Rong-Tsun Wu has dedicated over 40 years to anti-aging research, resulting in breakthroughs approved for FDA clinical trials."
            },
            products_page: {
                title: "Our Products",
                smart_h: "SmarT-101 (Memory/Brain Fog)",
                smart_p: "Published in 'Neuropharmacology' (2012). Focuses on memory impairment reversal and neuroregeneration using Ganoderma lucidum and Polygonatum sibiricum.",
                bright_h: "BrighT-101 (Vision Support)",
                bright_p: "A breakthrough for Age-Related Macular Degeneration (AMD) relief, utilizing herbal extracts to protect Retinal Pigmented Epithelial cells.",
                sport_h: "SporT-101 (Cardio/Vitality)",
                sport_p: "Published in 'British Journal of Pharmacology' (2013). Enhances mitochondrial biosynthesis for better energy and oxygen utilization.",
                cosmetic_h: "Dermatology & Cosmetics",
                cosmetic_p: "Our Lan-I/Lan-II series and OF-II Orchid Essence provide advanced anti-aging protection for your skin."
            },
            rd_page: {
                title: "R&D Excellence",
                tech_h: "Cold Extraction Technology",
                tech_p: "Our proprietary state-of-the-art cold extraction process preserves 99.7% of the molecular structure of active ingredients, ensuring maximum efficacy without heat damage.",
                research_h: "Scientific Validation",
                research_p: "Every product is backed by peer-reviewed research and collaboration with National Yang-Ming University's Research Center for Drug Discovery."
            },
            stories_page: {
                title: "Brand Stories",
                history_h: "Our Timeline",
                history_p: "From our academic roots to global expansion since 2011. AcaMed has consistently pushed the boundaries of life science through scientific and clinical rigor.",
                founder_h: "Professor Rong-Tsun Wu",
                founder_p: "A visionary in herbal medicine, Professor Wu's works have been approved for clinical trials by both the U.S. FDA and Taiwan FDA."
            },
            footer: {
                desc: "A biomedical company focused on natural herbal extraction and anti-aging technology.",
                nav: "Navigation",
                eco: "Ecosystem",
                contact: "Contact",
                rights: "© 2024 AcaMed Pharma & Biotech Co., Ltd. All Rights Reserved."
            },
            about: {
                quote: "We are not just manufacturing products; we are researching natural wisdom to delay aging.",
                founder: "Prof. Rong-Tsun Wu"
            }
        }
    },
    zh: {
        translation: {
            nav: { home: "首頁", about: "關於我們", products: "產品介紹", rd: "研發技術", stories: "品牌故事", news: "最新消息", contact: "聯繫我們" },
            home: {
                hero_tag: "源自國立陽明大學",
                hero_title: "精確草本萃取",
                hero_subtitle: "科學抗衰老方案",
                hero_desc: "長安生技引領全球抗衰老研發，結合尖端「低溫萃取技術」與嚴謹學術背景，將大地之粹轉化為卓越的健康方案。",
                cta_more: "了解更多",
                cta_products: "產品中心"
            },
            about_page: {
                title: "關於長安生技",
                company_h: "公司簡介",
                company_p: "長安生技有限公司由吳榮村教授於2011年創立，衍生自國立陽明大學藥物研發中心。我們專注於抗衰老植物藥物與高品質膳食補充劑的研發。",
                vision_h: "核心願景",
                vision_p: "利用擁有兩千年歷史的傳統中草藥（TCAM）進行抗衰老研究。我們建立了超過700部中醫典籍的電子資料庫，並建構高科技培植平台以確保原料純淨。",
                org_h: "組織架構",
                org_p: "長安生技為陽明健康（AcaHealth，創立於2009年）之全資子公司，專注於天然健康產品的研發與推廣。",
                leadership_h: "領導團隊",
                leadership_p: "總裁兼首席科學官吳榮村教授致力於抗衰老研究超過40年，其研究成果已獲得美國FDA二期臨床試驗許可。"
            },
            products_page: {
                title: "卓越產品",
                smart_h: "SmarT-101 智寧 (大腦健康)",
                smart_p: "研究發表於《Neuropharmacology》(2012)。專注於利用靈芝與黃精改善記憶受損與神經再生。",
                bright_h: "BrighT-101 亮寧 (視覺支援)",
                bright_p: "針對年齡相關性黃斑部病變 (AMD) 的突破性草本配方，保護視網膜色素上皮細胞。",
                sport_h: "SporT-101 舒寧 (動能支援)",
                sport_p: "研究發表於《British Journal of Pharmacology》(2013)。促進線粒體生物合成，提升體力與氧氣利用率。",
                cosmetic_h: "美妝保養系列",
                cosmetic_p: "Lan-I/Lan-II 面膜系列與 OF-II 蘭花精華，為您的肌膚提供頂級抗衰老防護。"
            },
            rd_page: {
                title: "研發優勢",
                tech_h: "低溫萃取技術",
                tech_p: "我們獨家的尖端低溫萃取技術可保留活性成分 99.7% 的分子結構，確保在不產生熱損傷的前提下獲得最高效能。",
                research_h: "科學驗證",
                research_p: "每一款產品皆有同行評審的論文支持，並與國立陽明大學藥物研發中心深度合作。"
            },
            stories_page: {
                title: "品牌故事",
                history_h: "發展歷程",
                history_p: "從學術研究到進駐亞馬遜美國站與日本樂天，長安生技自2011年起不斷推動生命科學的邊界。",
                founder_h: "吳榮村 教授",
                founder_p: "草本藥物領域的先驅，吳教授的研究成果已獲美國 FDA 與台灣 FDA 雙重臨床試驗認可。"
            },
            footer: {
                desc: "專注於天然草本萃取與抗衰老科技的生物醫學公司。",
                nav: "導覽首頁",
                eco: "生態系統",
                contact: "聯繫我們",
                rights: "© 2024 長安生技有限公司 AcaMed Pharma & Biotech Co., Ltd. 版權所有。"
            },
            about: {
                quote: "我們不只是在製造產品，我們是在研究如何運用自然的智慧來延緩衰老。",
                founder: "吳榮村 教授"
            }
        }
    },
    cn: {
        translation: {
            nav: { home: "首页", about: "关于我们", products: "产品介绍", rd: "研发技术", stories: "品牌故事", news: "最新消息", contact: "联系我们" },
            home: {
                hero_tag: "源自国立阳明大学",
                hero_title: "精确草本萃取",
                hero_subtitle: "科学抗衰老方案",
                hero_desc: "长安生技引领全球抗衰老研发，结合尖端“低温萃取技术”与严谨学术背景，将大地之粹转化为卓越的健康方案。",
                cta_more: "了解更多",
                cta_products: "产品中心"
            },
            about_page: {
                title: "关于长安生技",
                company_h: "公司简介",
                company_p: "长安生技有限公司由吴荣村教授于2011年创立，衍生自国立阳明大学药物研发中心。我们专注于抗衰老植物药物与高质量膳食补充剂的研发。",
                vision_h: "核心愿景",
                vision_p: "利用拥有两千年历史的传统中草药（TCAM）进行抗衰老研究。我们建立了超过700部中医典籍的电子数据库，并建构高科技培植平台以确保原料纯净。",
                org_h: "组织架构",
                org_p: "长安生技为阳明健康（AcaHealth，创立于2009年）之全资子公司，专注于天然健康产品的研发与推广。",
                leadership_h: "领导团队",
                leadership_p: "总裁兼首席科学官吴荣村教授致力于抗衰老研究超过40年，其研究成果已获得美国FDA二期临床试验许可。"
            },
            products_page: {
                title: "卓越产品",
                smart_h: "SmarT-101 智宁 (大脑健康)",
                smart_p: "研究发表于《Neuropharmacology》(2012)。专注于利用灵芝与黄精改善记忆受损与神经再生。",
                bright_h: "BrighT-101 亮宁 (视觉支援)",
                bright_p: "针对年龄相关性黄斑部病变 (AMD) 的突破性草本配方，保护视网膜色素上皮细胞。",
                sport_h: "SporT-101 舒宁 (动能支援)",
                sport_p: "研究发表于《British Journal of Pharmacology》(2013)。促进线粒体生物合成，提升体力与氧气利用率。",
                cosmetic_h: "美妆保养系列",
                cosmetic_p: "Lan-I/Lan-II 面膜系列与 OF-II 兰花精华，为您的肌肤提供顶级抗衰老防护。"
            },
            rd_page: {
                title: "研发优势",
                tech_h: "低温萃取技术",
                tech_p: "我们独家的尖端低温萃取技术可保留活性成分 99.7% 的分子结构，确保在不产生热损伤的前提下获得最高效能。",
                research_h: "科学验证",
                research_p: "每一款产品皆有同行评审的论文支持，並与国立阳明大学药物研发中心深度合作。"
            },
            stories_page: {
                title: "品牌故事",
                history_h: "发展历程",
                history_p: "从学术研究到进驻亚马逊美国站与日本乐天，长安生技自2011年起不断推动生命科学的边界。",
                founder_h: "吴荣村 教授",
                founder_p: "草本药物领域的先驱，吴教授的研究成果已获美国 FDA 与台湾 FDA 双重临床试验认可。"
            },
            footer: {
                desc: "专注于天然草本萃取与抗衰老科技的生物医学公司。",
                nav: "導航首页",
                eco: "生态系统",
                contact: "联系我们",
                rights: "© 2024 长安生技有限公司 AcaMed Pharma & Biotech Co., Ltd. 版权所有。"
            },
            about: {
                quote: "我们不只是在制造产品，我们是在研究如何运用自然的智慧来延缓衰老。",
                founder: "吴荣村 教授"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
