import React from 'react';
import { motion } from 'framer-motion';
import GetStartedComponent from '../components/GetStartedComponent';

const GetStartedPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-gray-900">
              Get Started with{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Kure Aesthetics
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Begin your aesthetic journey with our guided onboarding process
            </p>
          </motion.div>
        </div>
      </section>

      {/* GetStarted Component */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GetStartedComponent />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;