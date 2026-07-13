"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // এটি যোগ করা হয়েছে
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Spinner } from "@heroui/react";

export default function AllCollectionsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams(); // URL প্যারামিটার পাওয়ার জন্য
    const categoryQuery = searchParams.get("category"); // হোমপেজ থেকে আসা ক্যাটাগরি (যেমন: 'rings')

    const categories: string[] = ["Earing", "Ring", "Neckpiece", "Bracelet", "Bangles"];

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get<Product[]>("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" label="Loading products..." color="primary" />
            </div>
        );
    }

    // ফিল্টারিং লজিক: 
    // যদি URL-এ ক্যাটাগরি থাকে, তবে শুধু সেই ক্যাটাগরির গুলো দেখাবে। 
    // না থাকলে সব ক্যাটাগরি দেখাবে।
    const displayedCategories = categoryQuery
        ? categories.filter(cat => cat.toLowerCase() === categoryQuery.toLowerCase())
        : categories;

    return (
        <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-accent tracking-widest uppercase mb-10 text-center">
                {categoryQuery ? `${categoryQuery} Collection` : "Our Collections"}
            </h1>

            {displayedCategories.map((cat) => {
                const filteredProducts = products.filter((p) => p.category.toLowerCase() === cat.toLowerCase());

                if (filteredProducts.length === 0) return null;

                return (
                    <section key={cat} className="mb-15">
                        <h2 className="text-3xl font-extrabold text-accent tracking-tight mb-8 uppercase font-serif border-b border-accent/20 pb-2">
                            {cat}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredProducts.map((p) => (
                                <ProductCard key={p._id} product={p} />
                            ))}
                        </div>
                    </section>
                );
            })}

            {/* যদি কোনো ক্যাটাগরিতে প্রোডাক্ট না পাওয়া যায় */}
            {displayedCategories.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No products found in this category.</p>
            )}
        </div>
    );
}