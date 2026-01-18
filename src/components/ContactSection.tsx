import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './UI/ContactForm';
import { motion } from 'framer-motion';
export const ContactSection = () => {
  const offices = [{
    name: 'Factory & Head Office',
    location: 'Hetauda Industrial Area, Makwanpur, Nepal',
    phone: '+977-9849259817 / 057-590153',
    email: 'gabionwiretech@gmail.com'
  }, {
    name: 'Kathmandu Sales Office',
    location: 'Baluwatar, Kathmandu, Nepal',
    phone: '+977-9860292277 / 9748289595',
    email: 'gabionwiretech@gmail.com'
  }, {
    name: 'Branch Office',
    location: 'Janaki 6, Nepalgunj, Nepal',
    phone: '+977-9802545292 / 9748289595',
    email: 'gabionwiretech.npk@gmail.com'
  }];
  return <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/src/img/factory2.jpg')] bg-repeat"></div>
        <motion.div className="absolute inset-0 bg-blue-500/5" animate={{
        opacity: [0.02, 0.05, 0.02]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse'
      }}></motion.div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for inquiries, orders, or any information
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            {offices.map((office, index) => <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100} whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
                <h4 className="font-semibold text-lg text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">
                  {office.name}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <p className="text-gray-600">{office.location}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
          <div className="space-y-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};