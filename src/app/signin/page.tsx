"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        await authClient.signIn.email({
            email,
            password,
        }, {
            onSuccess: () => {
                alert("Sign-in successful!");
                router.push("/");
            },
            onError: (ctx) => {
                alert(ctx.error.message);
            }
        });
        setIsLoading(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#fdf2f2]">
            <form onSubmit={handleSignin} className="bg-white p-10 rounded-3xl shadow-xl w-[400px] border border-rose-100 flex flex-col gap-5">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-rose-900">Welcome Back</h2>
                    <p className="text-gray-500 text-sm mt-1">Please sign in to your account</p>
                </div>

                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variant="bordered"
                    color="danger"
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    variant="bordered"
                    color="danger"
                />

                <Button type="submit" className="w-full bg-rose-600 text-white font-semibold mt-2" size="lg" isLoading={isLoading}>
                    Sign In
                </Button>

                <p className="text-center text-sm text-gray-600 mt-2">
                    Don't have an account? {" "}
                    <Link href="/signup" className="text-rose-600 font-bold hover:underline">
                        Sign up here
                    </Link>
                </p>
            </form>
        </div>
    );
}