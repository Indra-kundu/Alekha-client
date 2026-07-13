import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

const features = [
    { icon: <FaShieldAlt />, title: "Premium Quality", desc: "Authentic & durable jewelry" },
    { icon: <FaTruck />, title: "Free Delivery", desc: "On orders over 2000 BDT" },
    { icon: <FaUndo />, title: "Easy Returns", desc: "Hassle-free exchange policy" },
    { icon: <FaHeadset />, title: "24/7 Support", desc: "Dedicated assistance anytime" },
];

export default function Features() {
    return (
        <section className="py-16 bg-rose-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-rose-900 uppercase tracking-widest">
                        Curated Elegance
                    </h2>
                    <p className="text-gray-500 mt-2 font-serif italic">Handpicked for your style</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            // এখানে ট্রানজিশন ইফেক্টটি বাড়ানো হয়েছে
                            className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm 
                            hover:shadow-xl hover:border-rose-200 
                            transition-all duration-500 ease-out 
                            hover:-translate-y-2 flex flex-col items-center text-center group"
                        >
                            {/* আইকন সেকশন */}
                            <div className="text-3xl text-rose-500 mb-4 bg-rose-50 p-4 rounded-full 
                                group-hover:bg-rose-500 group-hover:text-white 
                                transition-all duration-500 ease-out">
                                {f.icon}
                            </div>

                            {/* টেক্সট সেকশন */}
                            <h3 className="font-serif font-bold text-rose-900 text-lg mb-2">
                                {f.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}