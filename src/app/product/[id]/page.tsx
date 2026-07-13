"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Product } from "@/types/product";
import { Accordion, AccordionItem } from "@heroui/react"; // HeroUI ইমপোর্ট

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/products/${id}`).then(res => setProduct(res.data));
        }
    }, [id]);

    if (!product) return <div className="p-10 text-center">Loading product details...</div>;

    return (
        <div className="p-10 max-w-6xl mx-auto">
            <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col md:flex-row gap-12">
                {/* ইমেজ */}
                <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 h-[500px] object-cover rounded-2xl" />

                {/* বিস্তারিত */}
                <div className="flex flex-col justify-start w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                    <p className="text-accent font-medium mb-4 uppercase tracking-widest">By Alekha Adorn</p>
                    <p className="text-gray-600 text-lg mb-6">{product.description}</p>
                    <p className="text-3xl font-bold text-primary mb-8">${product.price}</p>

                    {/* ডিটেইলস সেকশন (অ্যাকর্ডিয়ান) */}
                    <Accordion selectionMode="multiple">
                        <AccordionItem key="1" title="Product Specifications">
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Metal Type:</strong> {product.metalType || "Not specified"}</p>
                                <p><strong>Gemstones:</strong> {product.gemstones || "Not specified"}</p>
                                <p><strong>Finish:</strong> {product.finish || "Not specified"}</p>
                                {product.category === "Ring" && <p><strong>Ring Size:</strong> {product.ringSize}</p>}
                                {product.category === "Earing" && <p><strong>Closure:</strong> {product.closureType}</p>}
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" title="Features & Design">
                            <p className="text-sm text-gray-600">{product.design || "Intricate floral pattern with high-polish texture."}</p>
                        </AccordionItem>
                    </Accordion>

                    <button className="bg-black text-white px-8 py-3 rounded-xl mt-8 w-full md:w-auto hover:bg-gray-800 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}