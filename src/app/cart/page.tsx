"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { MdDelete } from "react-icons/md"; // আইকনটির জন্য
import toast, { Toaster } from 'react-hot-toast'; // এটি আগে npm install react-hot-toast দিয়ে ইন্সটল করে নেবেন
export default function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-8 text-rose-900">Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {cart.map((item, index) => (
                        <div key={index} className="flex items-center gap-6 border-b pb-4">
                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                            <div className="flex-grow">
                                <h2 className="font-bold text-lg">{item.name}</h2>
                                <p className="text-rose-900 font-semibold">${item.price}</p>
                            </div>
                            {/* ডিলিট বাটন */}
                            <button
                                onClick={() => {
                                    removeFromCart(index);
                                    toast.error("Item removed from cart!");
                                }}
                                className="text-rose-500 hover:text-rose-700 transition-colors"
                            >
                                <MdDelete size={24} />
                            </button>
                        </div>
                    ))}

                    <div className="flex justify-between items-center pt-6 border-t">
                        <h2 className="text-2xl font-bold">Total:</h2>
                        <p className="text-2xl font-bold text-rose-900">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    );
}