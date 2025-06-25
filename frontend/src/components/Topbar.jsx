import React from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Topbar() {

  const navigate = useNavigate();
  const location = useLocation();



  return (
    <div className="h-20 bg-blue-600 flex items-center justify-between px-6 relative">
      
      {/* Empty div for spacing (left side placeholder) */}
      <div className="w-32"></div>

      {/* Centered Heading */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 font-bold text-3xl text-white text-center shadow-sm">
        LIA PLUS AI ASSIGNMENT
      </h1>

      {/* Right-aligned Button */}
      <div className="w-32 flex justify-end">
      <button onClick= {() => (location.pathname == '/dashboard') ? navigate('/') : navigate('/dashboard')} className="bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
  {location.pathname == '/dashboard' ? 'Go Back' : 'Dashboard'}
</button>

      </div>
    </div>
  );
}

export default Topbar;
