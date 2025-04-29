import React from "react";

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <section className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mx-auto">
        <h1>Our Services</h1>
        <h2 className="text-center mb-6">
          We offer a variety of tax-related services to meet your needs:
        </h2>
        <ul>
          <ul>
            <strong>DIRECT TAX SERVICE:</strong> 
            <li>Preparation of return under Income Tax, Property Tax etc.</li> 
            <li>Tax Planning Strategy– Optimum use of Corporate Tax Incentives.</li> 
          </ul>
                  
          <ul>
            <strong>INDIRECT TAX SERVICE:</strong> 
            <li>GST Registration Services.</li> 
            <li>Preparation of return of GST.</li> 
            <li>Advising the clients on the applicability of GST.</li>
            <li>Determine GST liability on monthly/ quarterly/annually basis as may be applicable.</li>
            <li>Training the clients personnel on the various aspects of the Tax.</li>
          </ul>

          
        </ul>
        <p className="text-center mt-6">
          For pricing information and to schedule a consultation, please contact us.
        </p>
      </section>
    </div>
  );
};

export default Services;
