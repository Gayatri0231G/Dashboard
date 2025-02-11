import React from "react";
import "./PaymentForm.css";
import { FaPen, FaCog } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaApple } from "react-icons/fa";

const PaymentForm = () => {
  return (
    <div className="payment-container">
      <div className="payment-box">
        <div className="header">
          <h2 className="title">AceCoinPay</h2>
          <div className="timer">01 : 19</div>
        </div>
        
        <div className="form-group">
          <label>Card Number</label>
          <div className="input-box">
            <BsCreditCard2Back className="icon" />
            <input type="text" value="2412  -  7512  -  3412  -  3456" disabled />
            <MdEdit className="edit-icon" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>CVV Number</label>
            <div className="input-box">
              <input type="text" value="327" disabled />
              <FaCog className="icon" />
            </div>
          </div>

          <div className="form-group">
            <label>Expiry Date</label>
            <div className="expiry-box">
              <input type="text" value="09" disabled />
              <span>/</span>
              <input type="text" value="22" disabled />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-box">
            <input type="password" placeholder="Enter your password" />
            <FaCog className="icon" />
          </div>
        </div>

        <button className="pay-button">Pay Now</button>
      </div>
      <div className="summary-container">
      <div className="card-box">
        <div className="chip"></div>
        <div className="card-info">
          <p className="card-holder">Jonathon Michael</p>
          <p className="card-number">**** 3456</p>
          <p className="expiry-date">09/22</p>
          <div className="card-logo"></div>
        </div>
      </div>

      <div className="payment-details">
        <div className="detail-row">
          <span>Company</span>
          <span className="company"><FaApple /> Apple</span>
        </div>
        <div className="detail-row">
          <span>Order Number</span>
          <span>1266201</span>
        </div>
        <div className="detail-row">
          <span>Product</span>
          <span className="product">MacBook Air</span>
        </div>
        <div className="detail-row">
          <span>VAT (20%)</span>
          <span className="vat">$100.00</span>
        </div>
      </div>

      <div className="payment-footer">
        <p className="total-text">You have to Pay</p>
        <h2 className="amount">549.99 <span>USD</span></h2>
      </div>
      </div>
    </div>
  );
};

export default PaymentForm;