import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-lab-gray bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <div className="relative">
                <motion.div
                    className="w-24 h-24 rounded-full border-4 border-slate-200"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute inset-0 w-24 h-24 rounded-full border-t-4 border-secondary"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                        A
                    </div>
                </div>
            </div>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="mt-8 text-xl font-black text-slate-800 tracking-[0.2em] uppercase"
            >
                Loading
            </motion.h2>
        </div>
    );
};

export default Loading;
