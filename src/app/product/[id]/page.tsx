"use client";
import { useEffect, useState, useContext } from "react"; // useContext যোগ করা হয়েছে
import axios from "axios";
import { useParams } from "next/navigation";
import { Product } from "@/types/product";
import { Accordion, AccordionItem } from "@heroui/react";
import { CartContext } from '@/context/CartContext';
import toast, { Toaster } from 'react-hot-toast'; // এটি আগে npm install react-hot-toast দিয়ে ইন্সটল করে নেবেন

// আর্গুমেন্ট থেকে { product } মুছে ফেলা হয়েছে কারণ আমরা স্টেট থেকে প্রোডাক্ট পাচ্ছি
export default function ProductDetailsPage() {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/products/${id}`)
                .then(res => setProduct(res.data))
                .catch(err => console.error("Error fetching product:", err));
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
                    <button
                        onClick={() => {
                            addToCart(product);
                            toast.success("Added to cart successfully!"); // এখানে টোস্টটি কল করা হয়েছে
                        }}
                        className="mt-8 bg-rose-900 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition-all"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    );
}