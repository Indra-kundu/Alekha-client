export interface Product {
    _id?: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    // নতুন ৫টি ফিল্ড (যেগুলো ডাটাবেসে যোগ করেছেন):
    metalType?: string;
    gemstones?: string;
    finish?: string;
    ringSize?: string;
    closureType?: string;
}