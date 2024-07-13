import React from 'react';

const StickyScroll = () => {
  return (
    <div className="relative">
      <div className="h-screen bg-fixed bg-center bg-cover bg-[url('https://example.com/your-image.jpg')]"></div>

      <div className="relative">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-red-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 1</h1>
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-blue-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 2</h1>
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-green-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 3</h1>
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
