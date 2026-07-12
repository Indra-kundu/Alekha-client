"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Product } from "@/types/product";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/products/${id}`).then(res => setProduct(res.data));
        }
    }, [id]);

    if (!product) return <div className="p-10">Loading...</div>;

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row gap-8">
                <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 h-[400px] object-cover rounded-2xl" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-primary mb-6">${product.price}</p>
                    <button className="bg-black text-white px-8 py-3 rounded-xl">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}