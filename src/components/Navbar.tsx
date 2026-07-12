"use client";

import Image from "next/image";
import Link from "next/link";
import { MdShoppingBag } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-background border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logoo.png"
                            alt="Alekha Adorn"
                            width={300}  // অনেক বড় দেওয়ার দরকার নেই
                            height={300} // ছোট মান দাও
                            className="h-20 w-auto object-contain" // h-20 মানে 80px, এটি নেভবারের পুরো হাইট দখল করবে
                            priority
                        />
                    </Link>
                </div>

                {/* Middle: Links */}
                <div className="hidden md:flex items-center gap-10 text-text/80 font-medium">
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <Link href="/all-collections" className="hover:text-accent transition-colors">All Collection</Link>
                    <Link href="/collections" className="hover:text-accent transition-colors">Add Collection</Link>
                    <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
                </div>

                {/* Right: Cart & Login */}
                <div className="flex items-center gap-8">
                    <Link href="/cart" className="relative text-text hover:text-accent transition-colors">
                        <MdShoppingBag size={24} />
                        {/* কাউন্টার ব্যজের কালারও accent এ সেট করা হয়েছে */}
                        <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                    </Link>
                    <Link href="/login" className="text-text hover:text-accent font-medium transition-colors">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;