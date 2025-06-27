import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiCheck, FiArrowRight, FiShield, FiHeart, FiAward } = FiIcons;

const Home = () => {
  const treatments = [
    {
      title: 'Botox & Fillers',
      description: 'Smooth wrinkles and restore volume with FDA-approved treatments',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop'
    },
    {
      title: 'Laser Treatments',
      description: 'Advanced laser technology for skin rejuvenation and hair removal',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    },
    {
      title: 'Chemical Peels',
      description: 'Reveal radiant skin with customized chemical peel treatments',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop'
    }
  ];

  const features = [
    {
      icon: FiShield,
      title: 'Medical Grade',
      description: 'FDA-approved treatments with highest safety standards'
    },
    {
      icon: FiHeart,
      title: 'Personalized Care',
      description: 'Customized treatment plans for your unique needs'
    },
    {
      icon: FiAward,
      title: 'Expert Team',
      description: 'Board-certified professionals with years of experience'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Beauty
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the finest in medical aesthetics with our advanced treatments 
              and personalized care. Reveal your natural beauty with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 text-center font-medium"
              >
                Book Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition-all duration-300 text-center font-medium flex items-center justify-center gap-2"
              >
                View Services
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">500+ Happy Clients</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=700&fit=crop"
              alt="Beautiful woman with glowing skin"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Certified Safe</p>
                  <p className="text-sm text-gray-600">FDA Approved</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kure Aesthetics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with personalized care to deliver 
              exceptional results in a safe, comfortable environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most sought-after aesthetic treatments designed to enhance 
              your natural beauty and boost your confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{treatment.title}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <Link
                    to="/services"
                    className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-2"
                  >
                    Learn More
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-pink-100 leading-relaxed">
              Schedule your complimentary consultation today and discover how we can 
              help you achieve your aesthetic goals with confidence.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;