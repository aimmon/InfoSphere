import React from 'react';
import { Mail } from 'lucide-react';

const SocialLogin = () => {
  const socialButtons = [
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3">
      {socialButtons.map((button) => (
        <button
          key={button.name}
          className={`${button.bgColor} ${button.hoverColor} text-white w-full inline-flex justify-center items-center gap-2 rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          {button.icon}
          <span>Continue with {button.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialLogin;