"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Image কম্পোনেন্ট ইমপোর্ট করা জরুরি

const slides = [
    { id: 1, title: "Timeless Elegance", subtitle: "Discover our new bridal collection", img: "/images/hero1.jpg" },
    { id: 2, title: "Golden Radiance", subtitle: "Modern designs for modern women", img: "/images/hero2.jpg" },
];

const Bannar = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[70vh] w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* ব্যানার ইমেজ */}
                    <Image
                        src={slides[index].img}
                        alt="Hero Banner"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* কালোর উপর হালকা ওভারলে যাতে টেক্সট ভালো দেখা যায় */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* টেক্সট কন্টেন্ট */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{slides[index].title}</h1>
                        <p className="text-lg md:text-xl mb-8">{slides[index].subtitle}</p>
                        <Link href="/collections" className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition">
                            Explore Collection
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Bannar;