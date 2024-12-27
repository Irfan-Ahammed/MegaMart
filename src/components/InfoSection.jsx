import React from "react";
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock } from "react-icons/fa";

const InfoSection = () => {
 
  const infoItems = [
    {
      icon: FaShippingFast,
      iconClassName: "text-3xl text-red-600",
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: FaHeadset,
      iconClassName: "text-3xl text-red-600",
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: FaMoneyBillWave,
      iconClassName: "text-3xl text-red-600",
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: FaLock,
      iconClassName: "text-3xl text-red-600",
      title: "Secure Payment",
      description: "Your payment information is safe with us",
    },
  ];

  return (
    <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-9">
      {infoItems.map((item, index) => (
        <div key={index} className="flex border hover:scale-105  duration-200 bg-slate-100 sm:h-36 items-center space-x-4 p-4 rounded-xl shadow-lg">
          <item.icon className={item.iconClassName} />
          <div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
