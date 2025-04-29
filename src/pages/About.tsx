import React from "react";
import "../App.css";

const About: React.FC = () => (
  <div className="about-page">
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-desc">
        <strong>Vashishth Consultancy Services</strong> is a leading accounting & tax consulting firm offering & engaged in
rendering efficient Consultancy Services viz. GST Consultancy, Company Incorporation , Financial &
Accounting Services, Audit related Services and other Accounting solutions to our esteemed clients.
We are progressive & committed to providing wide range of professional business service to our
respective clients. We are a team of qualified professionals with a strong commitment to
excellence and a passion for helping our clients achieve their financial goals. Our team consists of
chartered accountants, tax consultants, and financial advisors with extensive experience in the field of taxation and finance.
      </p>
      <h2 className="about-heading">Our Mission</h2>
      <p className="about-desc">
        To deliver reliable, transparent, and client-focused tax consultancy services that empower our clients to achieve their financial goals with confidence.
      </p>

      <h2 className="about-heading">Our Core Values</h2>
      <p className="about-desc">
      <ul className="about-list">
        <li>Integrity</li>
        <li>Commitment</li>  
        <li>Assisting Clients with Tax Planning</li>
        <li>Providing Tax Advice</li>
        <li>Best Quality Services to our clients.</li>                 
            </ul>
      </p>

      <h2 className="about-heading">Why Choose Us?</h2>
      <ul className="about-list">
        <li>Experienced and certified tax professionals</li>
        <li>Personalized solutions tailored to your needs</li>
        <li>Up-to-date knowledge of tax laws and regulations</li>
        <li>Commitment to integrity and confidentiality</li>
        <li>Prompt and responsive support</li>
      </ul>
    </div>
  </div>
);

export default About;