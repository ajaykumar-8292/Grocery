import React from 'react';
import { 
  FaShoppingCart, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedinIn 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#013b28] text-white pt-10 pb-4 px-6 md:px-16 font-sans">
  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#04523a]">
        
       
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-md text-[#013b28]">
              <FaShoppingCart size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-wide">FreshGrocer</h2>
              <p className="text-xs text-emerald-200">Fresh Food • Better Life</p>
            </div>
          </div>
          
         
          <div className="flex space-x-3 pt-2">
            <a href="#facebook" className="w-8 h-8 rounded-full bg-[#04523a] flex items-center justify-center hover:bg-emerald-600 transition">
              <FaFacebookF size={14} />
            </a>
            <a href="#instagram" className="w-8 h-8 rounded-full bg-[#04523a] flex items-center justify-center hover:bg-emerald-600 transition">
              <FaInstagram size={14} />
            </a>
            <a href="#twitter" className="w-8 h-8 rounded-full bg-[#04523a] flex items-center justify-center hover:bg-emerald-600 transition">
              <FaTwitter size={14} />
            </a>
            <a href="#youtube" className="w-8 h-8 rounded-full bg-[#04523a] flex items-center justify-center hover:bg-emerald-600 transition">
              <FaYoutube size={14} />
            </a>
            <a href="#linkedin" className="w-8 h-8 rounded-full bg-[#04523a] flex items-center justify-center hover:bg-emerald-600 transition">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold tracking-wider mb-4">- Quick Links</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <Link to="/">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            </Link>
            <Link to="/Products">
            <li><a href="#shop" className="hover:text-white transition">Products</a></li>
            </Link>
            <Link to="/Cart">
            <li><a href="#about" className="hover:text-white transition">Cart</a></li>
            </Link>
            <Link to="/Contact">
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </Link>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold tracking-wider mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#shipping" className="hover:text-white transition">Shipping Policy</a></li>
            <li><a href="#return" className="hover:text-white transition">Return Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold tracking-wider mb-2">Newsletter</h3>
          <p className="text-xs text-emerald-200 mb-4">Get latest updates and offers.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white rounded overflow-hidden p-1">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-3 py-2 text-xs text-gray-700 focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-[#00875a] hover:bg-[#007049] text-white text-xs px-4 py-2 rounded font-medium transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-200">
        <p>© 2026 FreshGrocer. All rights reserved.</p>
        
       
        <div className="flex items-center space-x-4 mt-3 md:mt-0 font-bold tracking-wider">
          <span className="text-blue-400 italic">VISA</span>
          <span className="flex -space-x-1.5"><span className="w-4 h-4 rounded-full bg-red-500 opacity-80"></span><span className="w-4 h-4 rounded-full bg-yellow-500 opacity-80"></span></span>
          <span className="text-blue-300 font-semibold">UPI</span>
          <span className="text-cyan-400 font-semibold tracking-tighter">Paytm</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;