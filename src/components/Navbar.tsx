import React, { useState } from 'react';
import { Bell, Settings, User } from 'lucide-react';
import AuthModal from './auth/AuthModal';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-600">CompanyScope</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              >
                <User className="w-5 h-5" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar;