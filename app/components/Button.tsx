// components/Button.tsx

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseStyle = 'py-2 px-4 rounded shadow-md transition-transform duration-300';
  const variantStyles = {
    primary: 'bg-blue-600 text-white font-semibold',
    secondary: 'bg-green-600 text-white font-semibold',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} transform hover:scale-110 hover:shadow-lg`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
