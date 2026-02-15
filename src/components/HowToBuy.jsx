import React from 'react';

function HowToBuy() {
  const steps = [
    {
      id: 1,
      title: 'Choose Package',
      description: 'Choose from our wide range of packages that cater to your requirements.'
    },
    {
      id: 2,
      title: 'Enter Details',
      description: 'Provide us details about what you need to boost now. We DON\'T require your password.'
    },
    {
      id: 3,
      title: 'Wait for results',
      description: 'You can pay via card or other methods. We will proceed with your order & inform you when done.'
    }
  ];

  return (
    <section className="howto">
      <div className="container">
        <h2 className="section-title white">How to Buy a Package?</h2>
        <p className="lead white">Buying social media packages from our services is simple and fast. Just follow these steps</p>
        <div className="how-grid">
          {steps.map((step) => (
            <div className="how-step" key={step.id}>
              <div className="big-num">{step.id}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
