import { FaGem, FaHandSparkles, FaCertificate } from "react-icons/fa";

const features = [
    { icon: <FaHandSparkles className="w-8 h-8 text-accent" />, title: "Handcrafted", description: "Artisan-made designs." },
    { icon: <FaCertificate className="w-8 h-8 text-accent" />, title: "Certified", description: "100% authentic quality." },
    { icon: <FaGem className="w-8 h-8 text-accent" />, title: "Exclusive", description: "Unique, modern styles." },
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center p-8 bg-background rounded-xl shadow-sm border border-gray-100">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-text mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}