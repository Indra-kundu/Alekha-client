export default function Newsletter() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto bg-rose-50 rounded-3xl p-10 md:p-16 border border-rose-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* বাম পাশ: টেক্সট */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-rose-900 mb-4">
                            Join The Alekha Family
                        </h2>
                        <p className="text-gray-600">
                            Subscribe for early access to new collections and exclusive offers.
                        </p>
                    </div>

                    {/* ডান পাশ: ইনপুট এবং বাটন */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-4 rounded-full border border-rose-200 w-full focus:outline-none focus:border-rose-400"
                        />
                        <button className="px-8 py-4 bg-rose-900 text-white font-bold rounded-full hover:bg-rose-800 transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}