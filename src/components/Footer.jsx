import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Youtube, MessageCircle, MapPin, Clock, Mail,Contact} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#374C37] text-white relative overflow-hidden">
      {/* Decorative plant silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <div className="relative h-full">
          {/* Grass silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-800 to-transparent"></div>
          
          {/* Plant silhouettes scattered across the bottom */}
          <div className="absolute bottom-0 left-0 w-20 h-28 opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M20 90 Q30 70 40 90 Q50 60 60 90 Q70 75 80 90 L20 90" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-20 w-16 h-24 opacity-40">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M30 90 Q40 65 50 90 Q60 70 70 90 L30 90" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-40 w-24 h-32 opacity-25">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M10 90 Q20 50 30 90 Q40 60 50 90 Q60 45 70 90 Q80 65 90 90 L10 90" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-40 w-20 h-28 opacity-35">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M25 90 Q35 70 45 90 Q55 55 65 90 Q75 75 85 90 L25 90" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-20 w-18 h-26 opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M35 90 Q45 65 55 90 Q65 70 75 90 L35 90" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-24 opacity-40">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M40 90 Q50 70 60 90 L40 90" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">TiCi NatureLab</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Transform your outdoor space with our expert garden services! From design to maintenance, we create beautiful, thriving gardens tailored to your vision. Let us bring your dream garden to life—professional, reliable, and passionate about nature.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100076247762801" className="w-10 h-10 bg-[#2E442F] rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2E442F] rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-[#2E442F] rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              <a href="#" className="w-10 h-10 bg-[#2E442F] rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-[#2E442F] rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li> */}
              <li>
  <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
    Our Services
  </Link>
</li>

              <li><Link to="/Projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/AboutUs" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Garden Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Garden Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Planting Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tree Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Irrigation Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Specialty Services</a></li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Monday - Saturday 09:00 - 18:00</span>
              </div>
              </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Santragachi, Howrah, West Bengal, India</span>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">ticinaturelab@gmail.com</span>
              </div>
            </div>
              <div>
              <div className="flex items-center space-x-2 mb-3">
                <Contact className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">+91 9903243299</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Tici by Simtrak Solutions
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;