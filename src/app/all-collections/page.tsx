"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Spinner, Input } from "@heroui/react";

export default function AllCollectionsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");

    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get("category");

    const categories: string[] = ["Earing", "Ring", "Neckpiece", "Bracelet", "Bangles"];

    useEffect(() => {
        if (categoryQuery) setCategoryFilter(categoryQuery);

        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get<Product[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`);
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [categoryQuery]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" label="Loading products..." color="primary" />
            </div>
        );
    }

    const filteredProducts = products.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter === "all" || p.category.toLowerCase() === categoryFilter.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="p-8 bg-[#fdf2f2] min-h-screen">
            <h1 className="text-4xl font-serif font-extrabold text-rose-900 text-center mb-10">
                {categoryFilter !== "all" ? `${categoryFilter} Collection` : "Our Collections"}
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
                <Input
                    className="max-w-xs"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* এখানে Native Select ব্যবহার করছি যা HeroUI-এর এরর দেবে না */}
                <select
                    className="max-w-xs w-full p-3 rounded-xl border border-gray-300 bg-white text-gray-700"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => <ProductCard key={p._id} product={p} />)
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}