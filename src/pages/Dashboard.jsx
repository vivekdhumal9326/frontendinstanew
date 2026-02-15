
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
    { id: 99, name: 'Test Payment ₹1', price: '₹ 1', count: 1, test: true },
    { id: 1, name: '5000 Instagram Followers', price: '₹ 1,999', count: 5000 },
    { id: 2, name: '10000 Instagram Followers', price: '₹ 1,997', count: 10000, offer: true },
    { id: 3, name: '80000 Instagram Followers', price: '₹ 14,998', count: 80000 },
    { id: 4, name: '100000 Instagram Followers', price: '₹ 18,998', count: 100000 }
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
