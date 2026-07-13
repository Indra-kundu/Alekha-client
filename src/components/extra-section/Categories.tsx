import Link from "next/link";

// ইমেজ পাথগুলো আপনার প্রজেক্টের public ফোল্ডার অনুযায়ী দিন
const categories = [
    { id: 1, name: "Earing", img: "/e1.jpg" },
    { id: 2, name: "Ring", img: "/r1.jpg" },
    { id: 3, name: "Neckpiece", img: "/n1.jpg" },
    { id: 4, name: "Bracelet", img: "/b1.jpg" },
    { id: 5, name: "Bangles", img: "/c1.jpg" },
];
export default function Categories() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    {/* টাইটেল পিংক কালার করা হয়েছে */}
                    <h2 className="text-3xl font-serif font-bold text-accent mb-4">Shop By Category</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {categories.map((category) => (
                        <Link
                            href={`/all-collections?category=${category.name.toLowerCase()}`}
                            key={category.id}
                            className="group flex flex-col items-center cursor-pointer"
                        >
                            {/* কার্ডের ইমেজ সেকশন */}
                            <div className="relative h-64 w-full overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${category.img})` }}
                                />
                            </div>

                            {/* ক্যাটাগরি নাম কার্ডের নিচে এবং পিংক কালারে */}
                            <h3 className="mt-4 text-xl font-serif font-semibold text-accent group-hover:text-rose-700 transition-colors">
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}