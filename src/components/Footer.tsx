import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-white">Alekha Adorn</h2>
                    <p className="text-sm">
                        Crafting timeless elegance for the modern woman. Discover our exclusive collection of premium jewelry & accessories.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/collections" className="hover:text-accent transition">All Collections</Link></li>
                        <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
                        <li><Link href="/faq" className="hover:text-accent transition">FAQ</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Shipping Policy</li>
                        <li>Returns & Exchanges</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="hover:text-accent transition"><FaFacebook size={24} /></a>
                        <a href="#" className="hover:text-accent transition"><FaInstagram size={24} /></a>
                        <a href="#" className="hover:text-accent transition"><FaWhatsapp size={24} /></a>
                    </div>
                    <p className="text-sm">Email: contact@alekhaadorn.com</p>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Alekha Adorn. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;