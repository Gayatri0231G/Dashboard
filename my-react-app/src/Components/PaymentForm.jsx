import React from "react";
import "./PaymentForm.css";
import { FaGripLines } from "react-icons/fa";
import { FaGripVertical } from "react-icons/fa6";
import { FaEdit, FaCcMastercard } from "react-icons/fa";
import { FaWifi, FaApple } from "react-icons/fa6"; 
import { BsCreditCard2BackFill } from "react-icons/bs"; 


const PaymentPage = () => {
  return (
    <div className="payment-container">
      <div className="payment-form">
        <div className="header">
          <h2 className="logo">AceCoin<span>Pay</span></h2>
          <div className="timer">
            <span>01</span>:<span>19</span>
          </div>
        </div>

        <div className="form">
          <div className="input-group1">
            <label>Card Number</label>
            <p className="sub-text">Enter the 16-digit card number on the card</p>
            <div className="input-box1">
              <FaCcMastercard className="icons" />
              <input type="text" value="2412   -   7512   -   3412   -   3456" disabled />
              <FaEdit className="edit-icons" />
            </div>
          </div>

          <div className="cvv-container">
            <div className="cvv-info">
              <label className="cvv-label">CVV Number</label>
              <p className="cvv-subtext">Enter the 3 or 4 digit number on the card</p>
            </div>
            <div className="cvv-input-box">
              <input type="text" value="327" disabled className="cvv-input" />
              <FaGripLines className="cvv-icon" />
            </div>
          </div>
          
          <div className="section">
            <div className="text">
              <label className="label">Expiry Date</label>
              <p className="subtext">Enter the expiration date of the card</p>
            </div>
            <div className="expiry-input-box">
              <div className="input-box">
                <input type="text" value="09" disabled className="input" />
              </div>
              <span className="separator">/</span>
              <div className="input-box">
                <input type="text" value="22" disabled className="input selected" />
              </div>
            </div>
          </div>

          <div className="section">
            <div className="text">
              <label className="label">Password</label>
              <p className="subtext">Enter your Dynamic password</p>
            </div>
            <div className="password-box">
              <input type="password" value="••••••••" disabled className="password-input" />
              <FaGripVertical className="icon" />
            </div>
          </div>

          <button className="pay-button">Pay Now</button>
        </div>
      </div>

      <div className="card-summary">
        {/* <div className="card">
          <div className="card-header">
          <BsCreditCard2BackFill className="card-chip" />
          <FaWifi className="wifi-icon" />
        </div>
        <div className="card-details">
          <p className="card-holder">Jonathan Michael</p>
          <p className="card-number">•••• 3456</p>
          <p className="card-expiry">09/22</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="mastercard-logo" />
        </div>
      </div> */}

      {/* <div className="payment-summary">
        <div className="summary-item">
          <span>Company</span>
          <span><FaApple className="apple-icon" /> Apple</span>
        </div>
        <div className="summary-item">
          <span>Order Number</span>
          <span>1266201</span>
        </div>
        <div className="summary-item">
          <span>Product</span>
          <span>MacBook Air</span>
        </div>
        <div className="summary-item">
          <span>VAT (20%)</span>
          <span>$100.00</span>
        </div>
      </div>

      <div className="payment-total">
        <p>You have to Pay</p>
        <h2>549.99 <span>USD</span></h2>
      </div> */}
       <div className="card">
        <div className="card-header">
          <BsCreditCard2BackFill className="card-chip" />
          <FaWifi className="wifi-icon" />
        </div>
        <div className="card-details">
          <p className="card-holder">Jonathan Michael</p>
          <p className="card-number">•••• 3456</p>
        </div>
        <div className="card-footer">
          <p className="card-expiry">09/22</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="mastercard-logo"
          />
        </div>
      </div>

      {/* Payment Details */}
      <div className="payment-summary">
        <div className="summary-item">
          <span>Company</span>
          <span><FaApple className="apple-icon" /> Apple</span>
        </div>
        <div className="summary-item">
          <span>Order Number</span>
          <span>1266201</span>
        </div>
        <div className="summary-item">
          <span>Product</span>
          <span className="bold">MacBook Air</span>
        </div>
        <div className="summary-item">
          <span>VAT (20%)</span>
          <span className="bold">$100.00</span>
        </div>
      </div>

      {/* Payment Total */}
      <div className="payment-total">
        <p>You have to Pay</p>
        <h2>549.99 <span>USD</span></h2>
      </div>
    </div>
  </div>
  );
};

export default PaymentPage;
