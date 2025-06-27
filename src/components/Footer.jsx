import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold">Kure Aesthetics</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transform your beauty with our advanced aesthetic treatments. 
              Expert care, proven results, personalized approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <SafeIcon icon={FiFacebook} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <SafeIcon icon={FiInstagram} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <SafeIcon icon={FiTwitter} className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Popular Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Botox & Fillers</li>
              <li className="text-gray-300">Laser Hair Removal</li>
              <li className="text-gray-300">Chemical Peels</li>
              <li className="text-gray-300">Skin Resurfacing</li>
              <li className="text-gray-300">HydraFacial</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-pink-400" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-pink-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-pink-400" />
                <a href="mailto:info@kureaesthetics.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                  info@kureaesthetics.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-pink-400 mt-1" />
                <span className="text-gray-300">
                  123 Beauty Lane<br />
                  Aesthetic City, AC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Kure Aesthetics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;