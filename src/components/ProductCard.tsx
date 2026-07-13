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
        <Card className="w-full h-[400px] p-5 bg-white/40 backdrop-blur-lg border border-white/50 shadow-lg hover:shadow-2xl rounded-3xl hover:border-accent/60 transition-all duration-500 ease-in-out transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-[180px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[7px] font-bold text-accent uppercase tracking-wider shadow-inner">
                    {product.category}
                </div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="mt-5 flex-grow">
                <h4 className="font-bold text-[13px] text-text truncate group-hover:text-accent transition-colors duration-300">
                    {product.name}
                </h4>
                <p className="text-[9px] text-accent font-semibold uppercase tracking-wider mt-1">
                    By Alekha Adorn
                </p>
                {/* ডেসক্রিপশন লাইনটি এখান থেকে মুছে ফেলা হয়েছে */}
                <p className="font-extrabold text-accent mt-4 text-xl tracking-tight">
                    ${product.price}
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
                <Link href={`/product/${product._id}`} className="w-full">
                    <Button
                        variant="bordered"
                        size="md"
                        className="w-full border-2 border-accent text-accent font-bold hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
                    >
                        View Details
                    </Button>
                </Link>

                {(onEdit || onDelete) && (
                    <div className="flex gap-3">
                        {onEdit && (
                            <Button
                                variant="flat"
                                size="md"
                                className="w-full bg-accent/10 text-accent font-bold hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
                                onClick={onEdit}
                            >
                                Edit
                            </Button>
                        )}
                        {onDelete && (
                            <Button
                                variant="flat"
                                size="md"
                                className="w-full bg-red-100 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
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