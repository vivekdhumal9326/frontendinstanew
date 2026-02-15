import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      platform: 'youtube',
      title: 'Youtube Marketing',
      description: 'You can buy views, likes, subscribers and comments for your YouTube channel & increase your video reach.'
    },
    {
      id: 2,
      platform: 'facebook',
      title: 'Facebook Marketing',
      description: 'Buy post likes, comments, video views, fan page followers and more for your Facebook presence.'
    },
    {
      id: 3,
      platform: 'instagram',
      title: 'Instagram Marketing',
      description: 'Buy followers, likes, views, comments and promotion services for Reels & IGTV.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Complete <span className="accent">Social Media</span> Marketing &amp; Branding Solutions</h2>
        <p className="lead">We have all major social platform services like Youtube marketing, Facebook marketing, Instagram marketing, LinkedIn marketing and Twitter Marketing.</p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className={`service-badge ${service.platform}`}>
                {service.platform === 'instagram' ? <i className="fa-brands fa-instagram"></i> : service.platform === 'youtube' ? 'YouTube' : 'f'}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
