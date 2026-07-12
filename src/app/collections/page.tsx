"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@heroui/react";
import { Spinner } from "@heroui/react"; // Spinner ইমপোর্ট করুন
export default function CollectionsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // লোডিং স্টেট
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);
    const [editProduct, setEditProduct] = useState<Product | null>(null);

    // ফর্মের ডেটা ধরার স্টেট
    const [formData, setFormData] = useState({ name: "", description: "", price: 0, imageUrl: "" });

    const categories: string[] = ["Earing", "Ring", "Neckpiece", "Bracelet", "Bangles"];

    const fetchProducts = async () => {
        setIsLoading(true); // ডেটা লোড শুরু
        try {
            const res = await axios.get<Product[]>("http://localhost:5000/api/products");
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setIsLoading(false); // ডেটা লোড শেষ
        }
    };

    useEffect(() => { fetchProducts(); }, []);
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" label="Loading collections..." color="primary" />
            </div>
        );
    }
    // এডিট মোডাল ওপেন করার ফাংশন
    const handleEditOpen = (product: Product) => {
        setEditProduct(product);
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl
        });
        setSelectedCategory(product.category);
        setIsOpen(true);
    };

    // সেভ বা আপডেট করার ফাংশন
    const handleSave = async () => {
        try {
            // ডাটাবেস পাঠানোর আগে ডাটা চেক করে নিন
            const payload = {
                ...formData,
                category: selectedCategory,
                price: Number(formData.price) // নিশ্চিত করুন এটি একটি Number
            };

            if (editProduct) {
                // PUT রিকোয়েস্ট
                await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, payload);
            } else {
                // POST রিকোয়েস্ট
                await axios.post("http://localhost:5000/api/products", payload);
            }

            // সব কাজ শেষে ডেটা পুনরায় ফেচ করুন
            await fetchProducts();
            setIsOpen(false);
            setEditProduct(null);
            setFormData({ name: "", description: "", price: 0, imageUrl: "" });
        } catch (error) {
            console.error("Error saving product:", error);
            alert("Failed to save product. Check console.");
        }
    };
    const handleDelete = async (id: string) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    };

    return (
        <div className="p-8">
            {categories.map((cat) => (
                <section key={cat} className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{cat}</h2>
                    <div className="grid grid-cols-4 gap-6">
                        {products.filter((p) => p.category === cat).map((p) => (
                            <ProductCard
                                key={p._id}
                                product={p}
                                onDelete={handleDelete}
                                onEdit={() => handleEditOpen(p)}
                            />
                        ))}
                        <div onClick={() => {
                            setSelectedCategory(cat);
                            setEditProduct(null);
                            setFormData({ name: "", description: "", price: 0, imageUrl: "" });
                            setIsOpen(true);
                        }}
                            className="border-2 border-dashed border-gray-300 flex items-center justify-center h-[350px] rounded-xl cursor-pointer hover:bg-gray-50">
                            <button className="text-primary font-semibold">+ Add New</button>
                        </div>
                    </div>
                </section>
            ))}

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-2xl w-[400px] shadow-xl">
                        <h2 className="text-xl font-bold mb-4">{editProduct ? "Edit Product" : `Add Product to ${selectedCategory}`}</h2>
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                        <input className="w-full border p-2 mb-2 rounded" type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })} />
                        <input className="w-full border p-2 mb-4 rounded" placeholder="Image URL" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} />
                        <div className="flex gap-2">
                            <Button color="danger" variant="flat" onClick={() => setIsOpen(false)}>Close</Button>
                            <Button color="primary" onClick={handleSave}>Save</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}