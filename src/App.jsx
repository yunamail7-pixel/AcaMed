import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Loading from './components/Loading';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const RD = lazy(() => import('./pages/RD'));
const Stories = lazy(() => import('./pages/Stories'));

// 錯誤邊界組件
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error("App Crash:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '50px', color: 'red' }}>
                    <h1>Something went wrong.</h1>
                    <pre>{this.state.error?.message}</pre>
                </div>
            );
        }
        return this.props.children;
    }
}

// 通用頁面佈局組件
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen font-body selection:bg-primary selection:text-white bg-nature-cream flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}

// Animated Routes Component to use useLocation hook
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <Layout>
                        <PageTransition>
                            <Home />
                        </PageTransition>
                    </Layout>
                } />
                <Route path="/about" element={
                    <Layout>
                        <PageTransition>
                            <About />
                        </PageTransition>
                    </Layout>
                } />
                <Route path="/products" element={
                    <Layout>
                        <PageTransition>
                            <Products />
                        </PageTransition>
                    </Layout>
                } />
                <Route path="/rd" element={
                    <Layout>
                        <PageTransition>
                            <RD />
                        </PageTransition>
                    </Layout>
                } />
                <Route path="/stories" element={
                    <Layout>
                        <PageTransition>
                            <Stories />
                        </PageTransition>
                    </Layout>
                } />
                <Route path="/contact" element={
                    <Layout>
                        <PageTransition>
                            <div className="pt-32 pb-24 text-center">
                                <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
                                <p className="text-gray-500">service@acamed.com.tw</p>
                            </div>
                        </PageTransition>
                    </Layout>
                } />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Suspense fallback={<Loading />}>
                    <AnimatedRoutes />
                </Suspense>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
