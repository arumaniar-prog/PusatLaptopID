/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, X, Star, Check, ArrowRight, Laptop, Cpu, HardDrive, Battery } from 'lucide-react';

// Mock Data for Laptops
const laptops = [
  {
    id: 1,
    name: "ProBook Ultra X1",
    price: 12999000,
    image: "https://picsum.photos/seed/laptop1/800/600",
    specs: { cpu: "Intel Core i7", ram: "16GB", storage: "512GB SSD" },
    rating: 4.8,
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Gaming Beast G5",
    price: 18499000,
    image: "https://picsum.photos/seed/laptop2/800/600",
    specs: { cpu: "AMD Ryzen 9", ram: "32GB", storage: "1TB SSD" },
    rating: 4.9,
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "SlimBook Air",
    price: 8999000,
    image: "https://picsum.photos/seed/laptop3/800/600",
    specs: { cpu: "Intel Core i5", ram: "8GB", storage: "256GB SSD" },
    rating: 4.5,
    tag: "Value Pick"
  },
  {
    id: 4,
    name: "WorkStation Pro",
    price: 24999000,
    image: "https://picsum.photos/seed/laptop4/800/600",
    specs: { cpu: "Intel Xeon", ram: "64GB", storage: "2TB NVMe" },
    rating: 5.0,
    tag: "Professional"
  },
  {
    id: 5,
    name: "FlexConvert 360",
    price: 10499000,
    image: "https://picsum.photos/seed/laptop5/800/600",
    specs: { cpu: "Intel Core i5", ram: "16GB", storage: "512GB SSD" },
    rating: 4.6,
    tag: "Convertible"
  },
  {
    id: 6,
    name: "EduMate Basic",
    price: 5499000,
    image: "https://picsum.photos/seed/laptop6/800/600",
    specs: { cpu: "Intel Celeron", ram: "4GB", storage: "128GB eMMC" },
    rating: 4.2,
    tag: "Student Choice"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                TechBlue
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#products" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>

            {/* Cart & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button 
                className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50">Home</a>
              <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50">Products</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                New Arrivals 2026
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Power Your Dreams with <span className="text-blue-600">TechBlue</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Discover the ultimate collection of high-performance laptops designed for creators, gamers, and professionals. Experience speed like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
                  View Specs
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900">1,000+</span> Happy Customers
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10 transform scale-90 animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/hero_laptop/800/600" 
                alt="Premium Laptop" 
                className="rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 w-full object-cover max-h-[500px]"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Warranty</p>
                  <p className="text-sm font-bold text-slate-900">2 Years Official</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Laptops</h2>
            <p className="text-slate-600 text-lg">
              Explore our hand-picked selection of top-tier laptops, engineered for performance and style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laptops.map((laptop, index) => (
              <motion.div
                key={laptop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img 
                    src={laptop.image} 
                    alt={laptop.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm uppercase tracking-wide">
                      {laptop.tag}
                    </span>
                  </div>
                  <button 
                    onClick={addToCart}
                    className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-slate-900 hover:text-blue-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {laptop.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                      <Star className="w-4 h-4 fill-current" />
                      {laptop.rating}
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 my-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                      <Cpu className="w-4 h-4 text-blue-500" />
                      <span className="truncate">{laptop.specs.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                      <Battery className="w-4 h-4 text-green-500" />
                      <span className="truncate">{laptop.specs.ram}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                      <HardDrive className="w-4 h-4 text-purple-500" />
                      <span className="truncate">{laptop.specs.storage}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-600">
                        {formatPrice(laptop.price)}
                      </p>
                    </div>
                    <button 
                      onClick={addToCart}
                      className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Setup?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our newsletter to get the latest tech news and exclusive discounts on premium laptops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
            />
            <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Laptop className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">TechBlue</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Your trusted destination for high-performance laptops. We bring the future of technology to your doorstep with premium service and warranty.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">Laptops</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>support@techblue.com</li>
                <li>+62 812 3456 7890</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-xs">
            <p>&copy; 2026 TechBlue Laptop Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

