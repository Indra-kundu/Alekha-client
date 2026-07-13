import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        // ফুটারের ব্যাকগ্রাউন্ড কালার হুবহু আপনার চাওয়া পিংক (FCE4EC) এ সেট করা হয়েছে
        <footer className="bg-[#FCE4EC] text-gray-800 pt-16 pb-8 border-t border-rose-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand Section */}
                <div className="space-y-4">
                    {/* ব্র্যান্ডের নাম গাঢ় অ্যাকসেন্ট রঙে (rose-900) সেট করা হয়েছে */}
                    <h2 className="text-2xl font-serif font-bold text-rose-900">Alekha Adorn</h2>
                    <p className="text-sm text-gray-700">
                        Crafting timeless elegance for the modern woman. Discover our exclusive collection of premium jewelry & accessories.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    {/* টাইটেল কালার গাঢ় করা হয়েছে */}
                    <h3 className="text-lg font-semibold text-rose-950 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li><Link href="/collections" className="hover:text-rose-700 transition">All Collections</Link></li>
                        <li><Link href="/about" className="hover:text-rose-700 transition">About Us</Link></li>
                        <li><Link href="/faq" className="hover:text-rose-700 transition">FAQ</Link></li>
                        <li><Link href="/contact" className="hover:text-rose-700 transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-lg font-semibold text-rose-950 mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>Shipping Policy</li>
                        <li>Returns & Exchanges</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-rose-950 mb-4">Connect With Us</h3>
                    <div className="flex space-x-4 mb-6">
                        {/* সোশ্যাল আইকনগুলোর কালার ব্র্যান্ডের সাথে মিলিয়ে অ্যাকসেন্ট শেডে দেওয়া হয়েছে */}
                        <a href="#" className="text-rose-800 hover:text-rose-600 transition"><FaFacebook size={24} /></a>
                        <a href="#" className="text-rose-800 hover:text-rose-600 transition"><FaInstagram size={24} /></a>
                        <a href="#" className="text-rose-800 hover:text-rose-600 transition"><FaWhatsapp size={24} /></a>
                    </div>
                    <p className="text-sm text-gray-700">Email: contact@alekhaadorn.com</p>
                </div>
            </div>

            {/* কপিরাইট সেকশন */}
            <div className="border-t border-rose-100 mt-12 pt-8 text-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Alekha Adorn. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;