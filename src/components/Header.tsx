import React from "react";

const Header: React.FC = () => {
  return (
    <header className="hero-header relative">
      <div className="absolute inset-0 bg-secondary/70" />
      <div className="hero-content relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
          Vashisth Tax Consultancy
        </h1>
        <p className="text-lg md:text-2xl mb-4 font-medium drop-shadow">
        GST, AUDIT, TAX CONSULTING & LEGAL SERVICES &amp; More....
        </p>
        <div className="mb-4 text-base md:text-lg">                    
          <span className="block">
          Plot No.81/2, First Floor, Office No. 1,3 & 4, Industrial Area-A Extn., Ludhiana-141003          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;