import React from 'react';
import Navbar from '../../components/main/Navbar/Navbar';
import FaqSection from '../../components/main/FaqSection/FaqSection';
import CarTempSec1 from '../../components/Products/CarTempSec1';

const CardTemplate = () => {
  return (
    <div className="md:pt-30 pt-20 ">
      <Navbar breadcrumb="products /  Cards / E-commerce Card / id" isBanner={false}  />
      <CarTempSec1/>
      <FaqSection />
    </div>
  );
}

export default CardTemplate;