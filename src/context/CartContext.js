"use client";
import { createContext, useState, useEffect } from 'react';
import { authClient } from "@/lib/auth-client";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { data: session } = authClient.useSession();
    const [cart, setCart] = useState([]);
    const API_BASE_URL = "http://localhost:5000"; // নিশ্চিত করুন আপনার ব্যাকএন্ড এই পোর্টে চলছে

    // ১. ইউজার লগইন করলে ডাটাবেস থেকে, আর না থাকলে লোকাল স্টোরেজ থেকে ডাটা আনবে
    useEffect(() => {
        if (session?.user?.id) {
            // ডাটাবেস থেকে কার্ট ফেচ করুন
            axios.get(`${API_BASE_URL}/api/cart/${session.user.id}`)
                .then(res => setCart(res.data.items))
                .catch(() => setCart([]));
        } else {
            // ইউজার লগইন না থাকলে লোকাল স্টোরেজ থেকে
            const savedCart = localStorage.getItem('alekhaCart');
            setCart(savedCart ? JSON.parse(savedCart) : []);
        }
    }, [session]);

    // ২. কার্ট আপডেট হ্যান্ডেলার
    const addToCart = async (product) => {
        setCart((prev) => [...prev, product]);

        if (session?.user?.id) {
            // ডাটাবেসে সেভ করুন
            await axios.post(`${API_BASE_URL}/api/cart/add`, { userId: session.user.id, product });
        } else {
            // লোকাল স্টোরেজে সেভ করুন
            localStorage.setItem('alekhaCart', JSON.stringify([...cart, product]));
        }
    };

    const removeFromCart = async (indexToRemove) => {
        const newCart = cart.filter((_, index) => index !== indexToRemove);
        setCart(newCart);

        if (session?.user?.id) {
            // ডাটাবেস থেকে রিমুভ করুন (এখানেও API_BASE_URL যোগ করা হয়েছে)
            await axios.post(`${API_BASE_URL}/api/cart/remove`, { userId: session.user.id, index: indexToRemove });
        } else {
            localStorage.setItem('alekhaCart', JSON.stringify(newCart));
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};