"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdShoppingBag } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { CartContext } from "@/context/CartContext"; // কার্ট কনটেক্সট ইমপোর্ট

const Navbar = () => {
    const { cart, setCart } = useContext(CartContext);
    const { data: session } = authClient.useSession();
    const ownerEmail = "owner12@gmail.com";
    const handleLogout = async () => {
        // ১. অথ থেকে সাইন আউট
        await authClient.signOut();

        // ২. কার্ট স্টেট খালি করে দিন
        setCart([]);

        // ৩. লোকাল স্টোরেজ পরিষ্কার করে দিন (যদি থাকে)
        localStorage.removeItem('alekhaCart');

        // ৪. পেজ রিলোড বা রিডাইরেক্ট
        window.location.href = "/"; // অথবা window.location.reload();
    };
    return (
        // ব্যাকগ্রাউন্ড হালকা রোজ টোনে দেওয়া হয়েছে এবং বর্ডার পিংক করা হয়েছে
        <nav className="sticky top-0 z-50 bg-rose-50/80 backdrop-blur-md border-b border-rose-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* লোগো */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logoo.png"
                            alt="Alekha Adorn"
                            width={140}
                            height={60}
                            className="h-16 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* মেনু লিঙ্কস - রঙ গাঢ় করা হয়েছে */}
                <div className="hidden md:flex items-center gap-10 text-rose-900 font-medium">
                    <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
                    <Link href="/all-collections" className="hover:text-rose-600 transition-colors">All Collection</Link>
                    <Link href="/about-us" className="hover:text-rose-600 transition-colors">About Us</Link>

                    {session?.user?.email === ownerEmail && (
                        <Link href="/collections" className="hover:text-rose-600 transition-colors underline decoration-rose-300 underline-offset-4">Add Collection</Link>
                    )}
                </div>

                {/* কার্ট এবং অথ */}
                <div className="flex items-center gap-6">
                    <Link href="/cart" className="relative text-rose-900 hover:text-rose-600 transition-colors">
                        <MdShoppingBag size={24} />
                        {/* কার্ট কাউন্টার ডাইনামিক করা হয়েছে */}
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                {cart.length}
                            </span>
                        )}
                    </Link>

                    {!session ? (
                        <>
                            <Link href="/signin" className="text-rose-900 hover:text-rose-600 font-medium transition-colors">Login</Link>
                            <Link href="/signup" className="bg-rose-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-800 transition-all">Sign Up</Link>
                        </>
                    ) : (
                        <Button
                            onClick={handleLogout}
                            size="sm"
                            color="danger"
                            variant="flat"
                            className="rounded-full"
                        >
                            Logout
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;