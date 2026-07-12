"use client";
import { Card, Button } from "@heroui/react";
import { Product } from "@/types/product";
import Link from "next/link";

interface Props {
    product: Product;
    onDelete?: (id: string) => void;
    onEdit?: () => void;
}

export const ProductCard = ({ product, onDelete, onEdit }: Props) => {
    return (
        <Card className="w-full h-[400px] p-5 bg-white/40 backdrop-blur-lg border border-white/50 shadow-xl rounded-3xl hover:border-accent/50 transition-all duration-300">            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-[180px] object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* কার্ডের উপরে একটি হালকা গোল্ডেন ওভারলে */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="mt-4 flex-grow">
                <h4 className="font-bold text-lg text-text truncate">{product.name}</h4>
                <p className="text-small text-text/70 line-clamp-2 mt-1">{product.description}</p>
                <p className="font-bold text-accent mt-3 text-lg">${product.price}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-4">
                <Link href={`/product/${product._id}`} className="w-full">
                    <Button
                        variant="bordered"
                        size="sm"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                        View Details
                    </Button>
                </Link>

                {(onEdit || onDelete) && (
                    <div className="flex gap-2">
                        {onEdit && (
                            <Button
                                variant="flat"
                                size="sm"
                                className="w-full bg-accent/10 text-accent hover:bg-accent hover:text-white"
                                onClick={onEdit}
                            >
                                Edit
                            </Button>
                        )}
                        {onDelete && (
                            <Button
                                variant="flat"
                                size="sm"
                                className="w-full bg-red-100 text-red-600 hover:bg-red-500 hover:text-white"
                                onClick={() => onDelete(product._id!)}
                            >
                                Delete
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
};