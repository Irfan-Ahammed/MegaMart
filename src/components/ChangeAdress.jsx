import React, { useState } from "react";

function ChangeAdress({ setAddress, setIsModelopen }) {
  const [newAddress, setNewAddress] = useState("");
  const onClose = () => {
    setAddress(newAddress);
    setIsModelopen(false);
  };
  return (
    <div>
      <input
        placeholder="Enter new address"
        type="text"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          onClick={() => setIsModelopen(false)}
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded "
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}

export default ChangeAdress;
