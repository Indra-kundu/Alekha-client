import Link from "next/link";

const categories = [
    { id: 1, name: "Necklaces" },
    { id: 2, name: "Earrings" },
    { id: 3, name: "Rings" },
    { id: 4, name: "Bracelets" },
];

export default function Categories() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-text mb-4">Shop By Category</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link href={`/category/${category.name.toLowerCase()}`} key={category.id}
                            className="group relative h-64 bg-white border border-gray-100 flex items-end p-6 rounded-lg cursor-pointer hover:border-accent transition-colors">
                            <h3 className="text-2xl font-serif text-text font-semibold group-hover:text-accent transition-colors">{category.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}