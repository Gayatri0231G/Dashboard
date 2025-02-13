import React from "react";
import "./PaymentForm.css";
import { FaGripLines } from "react-icons/fa";
import { FaEdit, FaLock, FaCcMastercard } from "react-icons/fa";

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
              <FaCcMastercard className="icon" />
              <input type="text" value="2412   -   7512   -   3412   -   3456" disabled />
              <FaEdit className="edit-icon" />
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
          <div className="input-group expiry-group">
            <label>Expiry Date</label>
            <p className="sub-text">Enter the expiration date of the card</p>
            <div className="expiry-box">
              <input type="text" value="09" disabled />
              <span>/</span>
              <input type="text" value="22" disabled />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <p className="sub-text">Enter your Dynamic password</p>
            <div className="input-box">
              <input type="password" value="••••••••" disabled />
              <FaLock className="icon" />
            </div>
          </div>

          <button className="pay-button">Pay Now</button>
        </div>
      </div>

      <div className="card-summary">
        <div className="card">
          <div className="chip"></div>
          <p className="cardholder">Jonathan Michael</p>
          <p className="card-number">**** **** **** 3456</p>
          <p className="expiry">09/22</p>
          <FaCcMastercard className="mastercard-icon" />
        </div>

        <div className="summary">
          <p><strong>Company:</strong> <span>Apple</span></p>
          <p><strong>Order Number:</strong> <span>1266201</span></p>
          <p><strong>Product:</strong> <span>MacBook Air</span></p>
          <p><strong>VAT (20%):</strong> <span>$100.00</span></p>
        </div>

        <div className="total">
          <p>You have to Pay</p>
          <h3>$549.99 <span>USD</span></h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
