import { FaPalette, FaGem, FaGift, FaCheckCircle } from "react-icons/fa";

const services = [
    { icon: <FaPalette />, title: "Custom Design", desc: "Crafting your unique vision into reality." },
    { icon: <FaGem />, title: "Quality Assurance", desc: "Certified and authentic materials." },
    { icon: <FaGift />, title: "Gift Wrapping", desc: "Beautifully packed for your loved ones." },
    { icon: <FaCheckCircle />, title: "Care Support", desc: "Expert tips for your jewelry care." },
];

export default function Services() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-rose-900">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div key={i} className="bg-rose-50/30 p-8 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                            <div className="text-2xl text-rose-600 mb-4 bg-white p-4 rounded-full shadow-sm">
                                {s.icon}
                            </div>
                            <h3 className="font-serif font-bold text-rose-900 mb-2">{s.title}</h3>
                            <p className="text-sm text-gray-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}