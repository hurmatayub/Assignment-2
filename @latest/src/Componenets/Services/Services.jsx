import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Fresh Produce Delivery',
    description: 'Get fresh vegetables delivered directly to your doorstep, ensuring quality and freshness.',
    image: '/images/fresh.png',
  },
  {
    id: 2,
    title: '100% Organic',
    description: 'Our vegetables are sourced from organic farms, free from harmful pesticides and chemicals.',
    image: '/images/organic.png',
  },
  {
    id: 3,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is here to help you with orders and inquiries around the clock.',
    image: '/images/support.png',
  },
];

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <img src={service.image} alt={`${service.title} image`} className="service-image" />
    <h3 className="service-title">{service.title}</h3>
    <p className="service-description">{service.description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
