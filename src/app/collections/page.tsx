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
    // CollectionsPage.tsx এর শুরুতে এই স্টেটটি চেক করুন:
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: 0,
        imageUrl: "",
        // এই নতুন ফিল্ডগুলো কি এখানে আছে? না থাকলে এগুলো যোগ করুন:
        metalType: "",
        gemstones: "",
        finish: "",
        ringSize: "",
        closureType: ""
    });

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
    const handleEditOpen = (product: Product) => {
        setEditProduct(product);
        setFormData({
            name: product.name || "",
            description: product.description || "",
            price: product.price || 0,
            imageUrl: product.imageUrl || "",
            // নিশ্চিত করুন যে সব ভ্যালু খালি স্ট্রিং হিসেবে সেট হচ্ছে
            metalType: product.metalType || "",
            gemstones: product.gemstones || "",
            finish: product.finish || "",
            ringSize: product.ringSize || "",
            closureType: product.closureType || ""
        });
        setSelectedCategory(product.category);
        setIsOpen(true);
    };

    // সেভ বা আপডেট করার ফাংশন
    const handleSave = async () => {
        try {
            const payload = {
                ...formData,
                category: selectedCategory,
                price: Number(formData.price)
            };

            if (editProduct) {
                await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, payload);
            } else {
                await axios.post("http://localhost:5000/api/products", payload);
            }
            await fetchProducts();
            setIsOpen(false);
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };
    const handleDelete = async (id: string) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    };

    return (
        <div className="p-8">
            {categories.map((cat) => (
                <section key={cat} className="mb-15">
                    <h2 className="text-3xl font-extrabold text-accent tracking-tight mb-8 uppercase font-serif border-b border-accent/20 pb-2 group-hover:scale-105 transition-transform duration-300">{cat}</h2>
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
                        {/* মোডালের ইনপুট ফিল্ডস */}
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                        <input className="w-full border p-2 mb-2 rounded" type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })} />
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Image URL" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} />

                        {/* কমন ফিল্ডস */}
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Metal Type" value={formData.metalType} onChange={(e) => setFormData({ ...formData, metalType: e.target.value })} />
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Gemstones" value={formData.gemstones} onChange={(e) => setFormData({ ...formData, gemstones: e.target.value })} />
                        <input className="w-full border p-2 mb-2 rounded" placeholder="Finish" value={formData.finish} onChange={(e) => setFormData({ ...formData, finish: e.target.value })} />

                        {/* কন্ডিশনাল ফিল্ডস */}
                        {selectedCategory === "Ring" && (
                            <input className="w-full border p-2 mb-2 rounded" placeholder="Ring Size" value={formData.ringSize} onChange={(e) => setFormData({ ...formData, ringSize: e.target.value })} />
                        )}
                        {selectedCategory === "Earing" && (
                            <input className="w-full border p-2 mb-2 rounded" placeholder="Closure Type" value={formData.closureType} onChange={(e) => setFormData({ ...formData, closureType: e.target.value })} />
                        )}
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