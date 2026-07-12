export default function Highlights() {
    return (
        <section className="py-24 bg-white text-text text-center px-6 border-b border-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif font-bold mb-6">
                    Elegance in Every Detail
                </h2>
                <p className="text-gray-600 mb-10 text-lg">
                    At Alekha Adorn, we believe jewelry is an expression of your unique identity.
                </p>

                {/* এখানে রোজ গোল্ড বর্ডার এবং টেক্সট দেওয়া হয়েছে */}
                <div className="flex justify-center gap-4">
                    <span className="px-8 py-3 border border-accent text-accent rounded-full text-sm uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-colors cursor-pointer">
                        Premium Quality
                    </span>
                </div>
            </div>
        </section>
    );
}