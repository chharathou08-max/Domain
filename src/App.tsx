import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ShoppingBag, Filter, ChevronRight } from 'lucide-react';
import { PRODUCTS, BRANDS, CATEGORIES, BRAND_INFO } from './data';
import { Brand, Category } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeBrand, setActiveBrand] = useState<Brand | 'All'>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BRAND_INFO.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchBrand = activeBrand === 'All' || product.brand === activeBrand;
    return matchCategory && matchBrand;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-zinc-900">
                LUMIÈRE<span className="text-emerald-600">.</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">ទំព័រដើម</a>
              <a href="#brands" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">ម៉ាកផលិតផល</a>
              <a href="#products" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">ផលិតផល</a>
              <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">អំពីយើង</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-600"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-zinc-200"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                <a href="#" className="block px-3 py-2 text-base font-medium text-zinc-900">ទំព័រដើម</a>
                <a href="#brands" className="block px-3 py-2 text-base font-medium text-zinc-600">ម៉ាកផលិតផល</a>
                <a href="#products" className="block px-3 py-2 text-base font-medium text-zinc-600">ផលិតផល</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#fafafa]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-100/50 blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-100/50 blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-medium mb-6"
              >
                <span className="flex w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                ជម្រើសទី១ សម្រាប់ការថែរក្សាសម្រស់
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.15] mb-6 tracking-tight"
              >
                លើកកម្ពស់សម្រស់ និង <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  ទំនុកចិត្តរបស់អ្នក
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-lg"
              >
                ស្វែងយល់ពីបណ្តុំផលិតផលថែរក្សាសម្ផស្ស និងអនាម័យកម្រិតស្តង់ដារ ដែលរចនាឡើងដើម្បីបំពេញគ្រប់តម្រូវការប្រចាំថ្ងៃរបស់អ្នក។
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20"
                >
                  ទិញឥឡូវនេះ
                  <ShoppingBag className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-zinc-700 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all"
                >
                  ស្វែងរកតាមម៉ាក
                </a>
              </motion.div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0 w-full">
              <div className="relative w-full max-w-lg aspect-[4/5] lg:aspect-auto lg:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/20 border border-white/60 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={BRAND_INFO[currentSlide].image} 
                      alt={BRAND_INFO[currentSlide].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-wider mb-4 border border-white/30">
                          FEATURED BRAND
                        </span>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
                          {BRAND_INFO[currentSlide].logoText}
                        </h3>
                        <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-sm">
                          {BRAND_INFO[currentSlide].description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
                  {BRAND_INFO.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 rounded-full transition-all duration-500 ${
                        idx === currentSlide ? 'h-8 bg-emerald-400' : 'h-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">ផលិតផលទាំងអស់</h2>
              <p className="text-zinc-500 max-w-xl">ជ្រើសរើសផលិតផលដែលសាកសមនឹងតម្រូវការរបស់អ្នកពីម៉ាកផលិតផលឈានមុខគេរបស់យើង។</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <select 
                  value={activeBrand}
                  onChange={(e) => setActiveBrand(e.target.value as Brand | 'All')}
                  className="appearance-none bg-white border border-zinc-200 text-zinc-700 py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                >
                  <option value="All">គ្រប់ម៉ាកទាំងអស់</option>
                  {BRANDS.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex overflow-x-auto pb-6 mb-8 gap-2 hide-scrollbar">
            <button
              onClick={() => setActiveCategory('All')}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'All' 
                  ? 'bg-zinc-900 text-white shadow-md' 
                  : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              ទាំងអស់
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-zinc-900 text-white shadow-md' 
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold tracking-wider text-zinc-900 rounded-full uppercase">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-emerald-600 font-medium mb-2">{product.category}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-zinc-500 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                      <span className="text-lg font-bold text-zinc-900">{product.price}</span>
                      <button className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 hover:bg-emerald-500 hover:text-white transition-colors duration-300">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">មិនមានផលិតផលដែលអ្នកកំពុងស្វែងរកនោះទេ!</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActiveBrand('All'); }}
                className="mt-4 text-emerald-600 font-medium hover:underline"
              >
                បង្ហាញផលិតផលទាំងអស់
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                LUMIÈRE<span className="text-emerald-500">.</span>
              </span>
              <p className="max-w-md text-zinc-400 mb-6">
                ក្រុមហ៊ុនចែកចាយផលិតផលថែរក្សាសម្ផស្ស និងអនាម័យឈានមុខគេ ផ្តល់ជូននូវផលិតផលដែលមានគុណភាពខ្ពស់ និងសុវត្ថិភាពសម្រាប់អ្នកប្រើប្រាស់។
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">ម៉ាកផលិតផល</h4>
              <ul className="space-y-3">
                {BRANDS.map(brand => (
                  <li key={brand}>
                    <a href="#" className="hover:text-emerald-400 transition-colors">{brand}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">ទំនាក់ទំនង</h4>
              <ul className="space-y-3">
                <li>info@lumiere.com.kh</li>
                <li>+855 12 345 678</li>
                <li>ភ្នំពេញ, កម្ពុជា</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 LUMIÈRE. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

