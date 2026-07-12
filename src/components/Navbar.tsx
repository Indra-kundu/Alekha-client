"use client";

import Image from "next/image";
import Link from "next/link";
import { MdShoppingBag } from "react-icons/md";
import { authClient } from "@/lib/auth-client"; // আপনার অথ ক্লায়েন্ট পাথ
import { Button } from "@heroui/react"; // HeroUI বাটন ব্যবহার করা হয়েছে

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const ownerEmail = "owner12@gmail.com"; // এখানে আপনার আসল ইমেইল দিন

    const handleLogout = async () => {
        await authClient.signOut();
        window.location.reload();
    };
    return (
        <nav className="sticky top-0 z-50 bg-background border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logoo.png"
                            alt="Alekha Adorn"
                            width={150}
                            height={80}
                            className="h-20 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Middle: Links */}
                <div className="hidden md:flex items-center gap-10 text-text/80 font-medium">
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <Link href="/all-collections" className="hover:text-accent transition-colors">All Collection</Link>
                    <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>

                    {session?.user?.email === ownerEmail && (
                        <Link href="/collections" className="hover:text-accent transition-colors">Add Collection</Link>
                    )}
                </div>

                {/* Right: Cart & Auth */}
                <div className="flex items-center gap-6">
                    <Link href="/cart" className="relative text-text hover:text-accent transition-colors">
                        <MdShoppingBag size={24} />
                        <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                    </Link>

                    {/* অথেনটিকেশন বাটনস */}
                    {!session ? (
                        <>
                            <Link href="/signin" className="text-text hover:text-accent font-medium transition-colors">
                                Login
                            </Link>
                            <Link href="/signup" className="text-text hover:text-accent font-medium transition-colors">
                                SignUP
                            </Link>
                        </>
                    ) : (
                        <Button
                            onClick={handleLogout}
                            size="sm"
                            color="danger"
                            variant="flat"
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