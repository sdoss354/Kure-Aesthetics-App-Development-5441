import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiHeart, FiShield, FiCheckCircle } = FiIcons;

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Treatment Options' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: FiShield,
      title: 'Safety First',
      description: 'We prioritize your safety with FDA-approved treatments and the highest medical standards.'
    },
    {
      icon: FiHeart,
      title: 'Personalized Care',
      description: 'Every treatment plan is customized to your unique needs and aesthetic goals.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'Our team consists of board-certified professionals committed to exceptional results.'
    },
    {
      icon: FiUsers,
      title: 'Client-Focused',
      description: 'Your comfort, satisfaction, and natural-looking results are our top priorities.'
    }
  ];

  const certifications = [
    'Board Certified in Aesthetic Medicine',
    'FDA-Approved Treatment Protocols',
    'Advanced Laser Certification',
    'Injectable Specialist Training',
    'Medical Safety Standards Compliance'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold text-gray-900">
                About <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Kure Aesthetics</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Kure Aesthetics, we believe everyone deserves to feel confident and beautiful. 
                Our mission is to provide exceptional aesthetic treatments that enhance your natural 
                beauty while maintaining the highest standards of safety and care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-pink-600">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=600&fit=crop"
                alt="Modern aesthetic clinic interior"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Award Winning</p>
                    <p className="text-sm text-gray-600">Excellence in Care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded with a passion for helping people feel their absolute best, Kure Aesthetics 
                has become a trusted destination for premium aesthetic treatments. Our journey began 
                with a simple belief: everyone deserves access to safe, effective, and personalized 
                aesthetic care.
              </p>
              <p>
                We've built our reputation on a foundation of medical excellence, cutting-edge 
                technology, and genuine care for each client. Our team of certified professionals 
                brings years of experience and a commitment to staying at the forefront of 
                aesthetic medicine.
              </p>
              <p>
                Today, we're proud to have helped hundreds of clients achieve their aesthetic goals 
                while maintaining our core values of safety, excellence, and personalized care. 
                Every treatment we perform is a step toward helping you feel more confident and 
                beautiful in your own skin.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure you receive 
              the highest quality care and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Certifications & Training
              </h2>
              <p className="text-xl text-gray-600">
                Our commitment to excellence is backed by extensive training and certifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Experience the Kure Difference
            </h2>
            <p className="text-xl text-pink-100 leading-relaxed">
              Join hundreds of satisfied clients who have trusted us with their aesthetic journey. 
              Schedule your consultation today and discover what makes us different.
            </p>
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium">
              Book Your Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;