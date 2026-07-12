"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // এই ফাংশনটিই আপনার ডাটাবেসে ইউজার ডাটা পোস্ট করবে
        await authClient.signUp.email({
            email,
            password,
            name,
        }, {
            onSuccess: () => {
                alert("Account created successfully!");
                router.push("/signin");
            },
            onError: (ctx) => {
                alert(ctx.error.message);
            }
        });
        setIsLoading(false);
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form onSubmit={handleSignup} className="bg-white p-8 rounded-2xl shadow-lg w-[400px] flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-center">Create Account</h2>

                <Input
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button type="submit" color="primary" className="w-full mt-2" isLoading={isLoading}>
                    Sign Up
                </Button>
            </form>
        </div>
    );
}