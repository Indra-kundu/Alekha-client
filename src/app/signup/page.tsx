"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await authClient.signUp.email({ email, password, name }, {
            onSuccess: () => {
                alert("Account created successfully!");
                router.push("/signin");
            },
            onError: (ctx) => alert(ctx.error.message)
        });
        setIsLoading(false);
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-[#fdf2f2]">
            <form onSubmit={handleSignup} className="bg-white p-10 rounded-3xl shadow-xl w-[400px] border border-rose-100 flex flex-col gap-5">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-rose-900">Create Account</h2>
                    <p className="text-gray-500 text-sm mt-1">Join Alekha Adorn family</p>
                </div>

                <Input label="Name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required variant="bordered" color="danger" />
                <Input label="Email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required variant="bordered" color="danger" />
                <Input label="Password" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required variant="bordered" color="danger" />

                <Button type="submit" className="w-full bg-rose-600 text-white font-semibold" size="lg" isLoading={isLoading}>
                    Sign Up
                </Button>

                <div className="flex items-center gap-2 my-2">
                    <div className="h-[1px] flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="h-[1px] flex-1 bg-gray-200" />
                </div>



                <p className="text-center text-sm text-gray-600 mt-2">
                    Already have an account? {" "}
                    <Link href="/signin" className="text-rose-600 font-bold hover:underline">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
}