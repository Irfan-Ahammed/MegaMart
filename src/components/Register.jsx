import React from "react";

function Register({openLogin}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
      <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already Have an account? </span>
        <button className="text-red-800" onClick={openLogin}>Login</button>
      </div>
    </div>
  );
}

export default Register;
