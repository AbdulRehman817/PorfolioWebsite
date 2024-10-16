"use client";

import React, { useRef } from "react";

const WhatIDoSection = () => {
  // Create a ref for the div
  const whatIDoRef = useRef(null);

  return (
    <div className="bg-[#1a1a1a] h-[45px]" ref={whatIDoRef}>
      <h2 className="text-white text-center text-2xl">What I Do</h2>
      {/* You can add more content here if needed */}
    </div>
  );
};

export default WhatIDoSection;
