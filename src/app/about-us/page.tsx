export default function AboutUsPage() {
    return (
        <div className="bg-[#fdf2f2] py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">

                {/* Section 1: Hero Story */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <img src="/m1.jpg" alt="Alekha Adorn Elegance" className="rounded-3xl shadow-lg w-full h-[500px] object-cover" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl font-extrabold text-rose-900">The Alekha Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Alekha Adorn began its journey at the intersection of beauty and elegance. We believe that jewelry is not just an accessory, but a unique expression of your personality. Each of our designs is carefully curated for those who appreciate sophistication and aesthetic grace.
                        </p>
                    </div>
                </div>

                {/* Section 2: Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 justify-center">
                        <h3 className="text-3xl font-bold text-rose-900">Crafting Excellence</h3>
                        <p className="text-gray-600">
                            We select every design with a keen eye for aesthetic taste. The precision of our craftsmanship and the durability of our materials make our jewelry truly unique.
                        </p>
                    </div>
                    <img src="/m2.jpg" alt="Jewelry Craft" className="rounded-3xl shadow-lg w-full h-[400px] object-cover" />
                </div>

                {/* Section 3: Values & Lifestyle */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100">
                        <h4 className="font-bold text-rose-800 mb-2">Unique Designs</h4>
                        <p className="text-sm text-gray-500">We constantly strive to bring you new and trendy designs that go beyond the conventional.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100">
                        <h4 className="font-bold text-rose-800 mb-2">Premium Quality</h4>
                        <p className="text-sm text-gray-500">Every piece of jewelry is crafted from durable, premium materials that enhance your elegance.</p>
                    </div>
                    <img src="/m3.jpg" alt="Lifestyle Jewelry" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" />
                </div>
            </div>
        </div>
    );
}