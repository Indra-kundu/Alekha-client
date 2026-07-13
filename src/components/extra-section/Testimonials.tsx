const reviews = [
    { name: "Anika Rahman", review: "The neckpiece is absolutely stunning and the quality is top-notch!", rating: 5 },
    { name: "Fatima Zahra", review: "Alekha Adorn has the most unique jewelry collection. Love it!", rating: 5 },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-rose-50/30">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold text-rose-900 mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm">
                            <p className="text-gray-600 italic mb-4">"{r.review}"</p>
                            <h4 className="font-bold text-rose-900">— {r.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}