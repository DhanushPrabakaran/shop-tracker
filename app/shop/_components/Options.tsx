import React from 'react';

interface OptionProps {
  j: string;
  onClick: () => void;
}

const Options: React.FC<OptionProps> = ({ j, onClick }) => {
  return (
    <button
      className="border text-xs px-2 py-1 bg-primary-black text-primary-white m-1 rounded-full uppercase"
      onClick={onClick} // Handle click event
    >
      {j}
    </button>
  );
};

export default Options;
