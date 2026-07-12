import { FaShippingFast, FaUndoAlt, FaHeadset } from "react-icons/fa";

export default function Services() {
    return (
        <section className="py-16 bg-background border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center"><FaShippingFast size={30} className="mb-3 text-accent" /> <h4 className="font-bold text-text">Free Shipping</h4></div>
                <div className="flex flex-col items-center"><FaUndoAlt size={30} className="mb-3 text-accent" /> <h4 className="font-bold text-text">Easy Returns</h4></div>
                <div className="flex flex-col items-center"><FaHeadset size={30} className="mb-3 text-accent" /> <h4 className="font-bold text-text">24/7 Support</h4></div>
            </div>
        </section>
    );
}