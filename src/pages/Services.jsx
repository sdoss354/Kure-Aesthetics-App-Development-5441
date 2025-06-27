import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiDollarSign, FiStar } = FiIcons;

const Services = () => {
  const services = [
    {
      category: 'Injectable Treatments',
      treatments: [
        {
          name: 'Botox',
          description: 'Smooth dynamic wrinkles and prevent new lines from forming',
          duration: '15-30 min',
          price: 'From $300',
          benefits: ['Reduces wrinkles', 'Prevents aging', 'Quick procedure', 'No downtime']
        },
        {
          name: 'Dermal Fillers',
          description: 'Restore volume and enhance facial contours naturally',
          duration: '30-45 min',
          price: 'From $600',
          benefits: ['Instant results', 'Natural look', 'Long lasting', 'Minimal downtime']
        },
        {
          name: 'Lip Enhancement',
          description: 'Achieve fuller, more defined lips with precision',
          duration: '30 min',
          price: 'From $500',
          benefits: ['Fuller lips', 'Better definition', 'Natural results', 'Immediate effect']
        }
      ]
    },
    {
      category: 'Laser Treatments',
      treatments: [
        {
          name: 'Laser Hair Removal',
          description: 'Permanent hair reduction with advanced laser technology',
          duration: '15-60 min',
          price: 'From $150',
          benefits: ['Permanent results', 'All skin types', 'Comfortable treatment', 'Fast sessions']
        },
        {
          name: 'Skin Resurfacing',
          description: 'Improve skin texture and reduce signs of aging',
          duration: '45-60 min',
          price: 'From $400',
          benefits: ['Smoother skin', 'Reduced scarring', 'Even tone', 'Collagen boost']
        },
        {
          name: 'Pigmentation Treatment',
          description: 'Target age spots, sun damage, and uneven skin tone',
          duration: '30-45 min',
          price: 'From $250',
          benefits: ['Even skin tone', 'Reduced spots', 'Brighter complexion', 'Long-term results']
        }
      ]
    },
    {
      category: 'Skin Treatments',
      treatments: [
        {
          name: 'Chemical Peels',
          description: 'Reveal fresh, radiant skin with customized peel treatments',
          duration: '30-45 min',
          price: 'From $150',
          benefits: ['Glowing skin', 'Reduced acne', 'Improved texture', 'Minimal downtime']
        },
        {
          name: 'Microneedling',
          description: 'Stimulate collagen production for smoother, firmer skin',
          duration: '45-60 min',
          price: 'From $300',
          benefits: ['Collagen boost', 'Reduced scars', 'Firmer skin', 'Natural healing']
        },
        {
          name: 'HydraFacial',
          description: 'Deep cleansing and hydrating treatment for all skin types',
          duration: '30-45 min',
          price: 'From $200',
          benefits: ['Instant glow', 'Deep cleansing', 'Hydrated skin', 'No downtime']
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of aesthetic treatments designed to enhance 
              your natural beauty and boost your confidence with proven, safe results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                {category.category}
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {category.treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {treatment.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {treatment.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6 text-sm">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <SafeIcon icon={FiClock} className="w-4 h-4" />
                          <span>{treatment.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-pink-600 font-semibold">
                          <SafeIcon icon={FiDollarSign} className="w-4 h-4" />
                          <span>{treatment.price}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {treatment.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-gray-600 text-sm flex items-center gap-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
                        Book Consultation
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Not Sure Which Treatment is Right for You?
            </h2>
            <p className="text-xl text-pink-100 leading-relaxed">
              Book a complimentary consultation with our expert team. We'll assess your 
              needs and create a personalized treatment plan just for you.
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium">
              Schedule Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;