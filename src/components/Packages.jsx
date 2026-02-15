import React from 'react';

function Packages({ packages, onOrderClick }) {
  return (
    <section id="packages" className="packages-section">
      <div className="container packages-inner">
        <div className="packages-grid">
          {packages.map((pkg) => (
            <article className="pkg-card" key={pkg.id}>
              <div className="pkg-icon"><i className="fa-brands fa-instagram"></i></div>
              <h3>{pkg.name} {pkg.offer && <span className="offer">🔥 OFFER</span>}</h3>
              <p className="pkg-meta">Just for <span className="price">{pkg.price}</span></p>
              <button 
                className="btn btn-outline order-btn"
                onClick={() => onOrderClick(pkg)}
              >
                Order Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
