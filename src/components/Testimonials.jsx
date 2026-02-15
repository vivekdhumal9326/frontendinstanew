import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sakshant Vitekar',
      rating: 5.0,
      text: 'I was hunting for low-cost, long-lasting followers when I came upon this service. Pricing was great and delivery was quick.'
    },
    {
      id: 2,
      name: 'Vivek D',
      rating: 5.0,
      text: 'Fast delivery, great support and excellent pricing — highly recommend for starting creators.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Our Happy Clients...</h2>
        <div className="test-grid">
          {testimonials.map((test) => (
            <div className="test-card" key={test.id}>
              <div className="rating">
                <span className="score">{test.rating.toFixed(1)}</span>
                <span className="stars">★★★★★</span>
              </div>
              <h4>{test.name}</h4>
              <hr />
              <p className="italic">{test.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
