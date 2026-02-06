import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import RD from './pages/RD';
import Stories from './pages/Stories';

// 錯誤邊界組件，用於捕捉 React 渲染錯誤並防止白屏
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
        <div className="min-h-screen font-body selection:bg-primary selection:text-white bg-nature-cream">
            <Navbar />
            <main className="min-h-[70vh]">
                {children}
            </main>
            <Footer />
        </div>
    );
}

// 最新消息頁面佔位組件
const News = () => (
    <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-12">Latest News</h1>
        <p className="text-gray-500">Updates coming soon.</p>
    </div>
);

// 聯繫我們頁面佔位組件
const Contact = () => (
    <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
        <p className="text-gray-500">service@acamed.com.tw</p>
    </div>
);

function App() {
    return (
        <ErrorBoundary>
            <Router basename="/AcaMed">
                <Routes>
                    <Route path="/" element={<Layout><Home /></Layout>} />
                    <Route path="/about" element={<Layout><About /></Layout>} />
                    <Route path="/products" element={<Layout><Products /></Layout>} />
                    <Route path="/rd" element={<Layout><RD /></Layout>} />
                    <Route path="/stories" element={<Layout><Stories /></Layout>} />
                    <Route path="/news" element={<Layout><News /></Layout>} />
                    <Route path="/contact" element={<Layout><Contact /></Layout>} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
