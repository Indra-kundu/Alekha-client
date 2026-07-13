"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// আপনার দেওয়া ছবি এবং নির্দিষ্ট ইউআরএল পাথ অনুযায়ী স্লাইড আপডেট করা হলো
const slides = [
    {
        id: 1,
        title: "Timeless Elegance",
        subtitle: "Discover our exclusive bridal collection",
        img: "/bannar1.jpg", // আপনার চাওয়া সঠিক ইউআরএল
    },
    {
        id: 2,
        title: "Golden Radiance",
        subtitle: "Explore premium jewelry sets",
        img: "/bannar2.jpg", // আপনার চাওয়া সঠিক ইউআরএল
    },
    {
        id: 3,
        title: "Modern Designs",
        subtitle: "Sophisticated rings and accessories",
        img: "/bannar3.jpg", // আপনার চাওয়া সঠিক ইউআরএল
    },
];

const Bannar = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setIndex((prev) => (prev + 1) % slides.length),
            6000 // প্রতিটি স্লাইড ৬ সেকেন্ড ধরে থাকবে
        );
        return () => clearInterval(timer);
    }, []);

    return (
        // পুরো ব্যানারের ব্যাকগ্রাউন্ড কালার কার্ডের সাথে মিলিয়ে দেওয়া হয়েছে
        <div className="relative h-[80vh] w-full overflow-hidden bg-[#FCE4EC]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }} // ট্রানজিশন আরও স্মুথ করা হলো
                    className="absolute inset-0 grid grid-cols-1 md:grid-cols-2"
                >
                    {/* বামপাশে ছবি */}
                    <div className="relative h-full w-full">
                        <Image
                            src={slides[index].img}
                            alt={slides[index].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* ছবির উপর হালকা ওভারলে */}
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* ডানপাশে টেক্সট কন্টেন্ট */}
                    <div className="flex flex-col items-start justify-center h-full p-12 md:p-20 text-left text-rose-950 bg-[#FCE4EC]">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-serif font-bold mb-6"
                        >
                            {slides[index].title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl md:text-2xl mb-10 text-gray-700"
                        >
                            {slides[index].subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <Link
                                href="/all-collections"
                                // বাটন কালার অ্যাকসেন্ট শেডে দেওয়া হলো
                                className="bg-rose-800 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-rose-900 transition-all duration-300 shadow-md"
                            >
                                Explore Collection
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* স্লাইড ইন্ডিকেটর (ডট) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${i === index ? "bg-rose-800 w-8" : "bg-gray-400 hover:bg-rose-600"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bannar;