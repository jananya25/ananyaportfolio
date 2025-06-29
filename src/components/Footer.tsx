import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-gray-400 mb-4">
            Have an interesting, stupid or crazy idea you'd like some help building?
          </p>
          <p className="text-gray-400 mb-6">
            Let's talk — <a href="mailto:ananyajain2348@gmail.com" className="text-[#00ff88] hover:underline">ananyajain2348@gmail.com</a>
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            2025 © Ananya Jain. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;