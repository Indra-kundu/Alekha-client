"use client";
import { Card, Button } from "@heroui/react";
import { Product } from "@/types/product";
import Link from "next/link";

interface Props {
    product: Product;
    onDelete?: (id: string) => void; // Optional (?)
    onEdit?: () => void;           // Optional (?)
}

export const ProductCard = ({ product, onDelete, onEdit }: Props) => {
    return (
        <Card className="w-full h-[380px] p-4 flex flex-col justify-between">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-[180px] object-cover rounded-md"
            />
            <div className="mt-2 flex-grow">
                <h4 className="font-bold text-lg">{product.name}</h4>
                <p className="text-small text-gray-500 line-clamp-2">{product.description}</p>
                <p className="font-semibold mt-2">${product.price}</p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                {/* ভিউ ডিটেইলস বাটন - সব জায়গায় দেখাবে */}
                <Link href={`/product/${product._id}`}>
                    <Button color="default" variant="bordered" size="sm" className="w-full">
                        View Details
                    </Button>
                </Link>

                {/* এডিট এবং ডিলিট বাটন - শুধু তখনই দেখাবে যদি এগুলো পাঠানো হয় */}
                {(onEdit || onDelete) && (
                    <div className="flex gap-2">
                        {onEdit && (
                            <Button color="primary" variant="flat" size="sm" className="w-full" onClick={onEdit}>
                                Edit
                            </Button>
                        )}
                        {onDelete && (
                            <Button color="danger" variant="flat" size="sm" className="w-full" onClick={() => onDelete(product._id!)}>
                                Delete
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
};