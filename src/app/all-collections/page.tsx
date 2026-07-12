"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Spinner } from "@heroui/react"; // HeroUI থেকে Spinner ইমপোর্ট করুন

export default function AllCollectionsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true); // নতুন লোডিং স্টেট
    const categories: string[] = ["Earing", "Ring", "Neckpiece", "Bracelet", "Bangles"];

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true); // ডেটা ফেচ শুরু হওয়ার আগে true
            try {
                const res = await axios.get<Product[]>("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false); // ডেটা আসা শেষ হলে false
            }
        };
        fetchProducts();
    }, []);

    // লোডিং অবস্থায় স্পিনার দেখাবে
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" label="Loading products..." color="primary" />
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Our Collections</h1>
            {categories.map((cat) => {
                const filteredProducts = products.filter((p) => p.category === cat);
                if (filteredProducts.length === 0) return null;

                return (
                    <section key={cat} className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">{cat}</h2>
                        <div className="grid grid-cols-4 gap-6">
                            {filteredProducts.map((p) => (
                                <ProductCard key={p._id} product={p} />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}