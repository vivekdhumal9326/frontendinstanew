import React, { useState } from 'react';
import axios from 'axios';
import qrImg from "../assets/scanner.jpeg";
import BASE_URL from '../../config';


function OrderModal({ package: pkg, onClose }) {
  const [profile, setProfile] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [UTR, setUTR] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const extractPrice = (priceStr) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''));
  };

    const handleInitiatePayment = async (e) => {
      e.preventDefault();
      
      if (!profile.trim() || !email.trim() || !whatsapp.trim()) {
        alert('Please fill all required fields');
        return;
      }

      try {
    const res = await axios.post("https://backendinsta-s0nf.onrender.com/api/users/submit", {
      instagram: profile,
      email: email,
      whatsapp: whatsapp,
      amount: extractPrice(pkg.price),
      upi: UTR, // make sure you have this state
    });
    setPaymentSuccess(true)
    console.log(res)

    if (res.data.success) {
      alert("Order submitted successfully!");
    } else {
      alert("Something went wrong");
    }

    setPaymentSuccess(true)

  } catch (error) {
    console.error(error);
    alert("Failed to submit data");
  }
    };

  return (
    <div className="modal is-open" role="dialog" aria-modal="true">
      <div className="modal-dialog">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2>Order <span>{pkg.name}</span></h2>

        {paymentSuccess ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Ordered Successful!</h3>
            <p>Your order has been placed successfully.</p>
            <p>We will verify soon...</p>
            <p>Order Details:</p>
            <ul>
              <li><strong>Package:</strong> {pkg.name}</li>
              <li><strong>Price:</strong> {pkg.price}</li>
              <li><strong>Email:</strong> {email}</li>
              <li><strong>WhatsApp:</strong> {whatsapp}</li>
            </ul>
            <p>We will contact you soon with updates on your order.</p>
          </div>
        ) : (
          <form onSubmit={handleInitiatePayment}>
            <div className="form-row">
              <span className="label-title">Instagram profile (profile must be public)</span>
              <input
                type="text"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                required
                placeholder="Please Enter Username or Link Of Instagram"
              />
            </div>

            <div className="form-row">
              <span className="label-title">Email Address *</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Please Enter Email id"
              />
            </div>

            <div className="form-row">
              <span className="label-title">WhatsApp Number *</span>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                placeholder="Please Enter WhatsApp number"
              />
            </div>

            <div className="form-row">
              <span className="label-title">Amount</span>
              <input
                type="text"
                value={pkg.price}
                readOnly
              />
            </div>

            {(
              <div className="qr-code-section">
                <h4>Scan QR Code to Complete Payment</h4>
                <div className="qr-code-container">
                  <img src={qrImg} alt="Payment QR Code" className="qr-code-image" />
                </div>
                <p>Or use Razorpay payment window above</p>
                
              </div>
            )}

            <div className="form-row">
              <span className="label-title">Enter UTR Number</span>
              <input
                type="text"
                onChange={(e) => setUTR(e.target.value)}
                required
                placeholder='Enter UTR after payment'
              />
            </div>

            

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                
              >
                Proceed to Payment
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default OrderModal;
