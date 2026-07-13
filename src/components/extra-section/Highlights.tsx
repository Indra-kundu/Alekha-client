const highlights = [
    { title: "Best Sellers", desc: "Top loved pieces", img: "/e6.jpg" },
    { title: "New Arrivals", desc: "Fresh & Trendy", img: "/b5.jpg" },
    { title: "Limited Edition", desc: "Rare & Elegant", img: "/c6.jpg" },
];

export default function Highlights() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-rose-900 uppercase tracking-widest">
                        Curated Elegance
                    </h2>
                    <p className="text-gray-500 mt-2 font-serif italic">Handpicked for your style</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((h, i) => (
                        <div
                            key={i}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            {/* ব্যাকগ্রাউন্ড ইমেজ ও ট্রানজিশন */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${h.img})` }}
                            />

                            {/* পিংক ওভারলে */}
                            <div className="absolute inset-0 bg-rose-900/30 group-hover:bg-rose-900/40 transition-colors duration-500" />

                            {/* কন্টেন্ট */}
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-serif font-bold mb-1">{h.title}</h3>
                                <p className="text-sm font-light opacity-90">{h.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}