
import React, { useState } from 'react';
import Header from '../components/Header'
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import HowToBuy from '../components/HowToBuy';
import OrderModal from '../components/OrderModal';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: 1, name: '5000 Instagram Followers', price: '₹ 700', count: 5000 },
    { id: 2, name: '10000 Instagram Followers', price: '₹ 1,500', count: 10000, offer: true },
    { id: 3, name: '50000 Instagram Followers', price: '₹ 7,500', count: 50000 },
    { id: 4, name: '80000 Instagram Followers', price: '₹ 15,000', count: 80000 },
    { id: 5, name: '100000 Instagram Followers', price: '₹ 21,000', count: 100000},
    { id: 6, name: '1000 Instagram Views', price: '₹ 500', count: 1000},
    { id: 7, name: '5000 Instagram Views', price: '₹ 980', count: 5000},
    { id: 9, name: '10000 Instagram Views', price: '₹ 1,450', count: 10000},
    { id: 10, name: '15000 Instagram Views', price: '₹ 2,650', count: 15000},
    { id: 11, name: '20000 Instagram Views', price: '₹ 3,550', count: 1000}, 
    { id: 12, name: '50000 Instagram Views', price: '₹ 5,900', count: 50000},
    { id: 6, name: '100000 Instagram Views', price: '₹ 12,000', count: 100000}
    
    
  ];

  const handleOrderClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Packages packages={packages} onOrderClick={handleOrderClick} />
      <Testimonials />
      <Services />
      <HowToBuy />
      <WhatsAppFloat />
      {isModalOpen && (
        <OrderModal 
          package={selectedPackage} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  )
}
