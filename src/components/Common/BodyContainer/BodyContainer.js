import React from 'react';

const BodyContainer = ({ children, rootClassName }) => {
  return (
    <div className={`relative isolate overflow-hidden bg-gray-900  ${rootClassName}`}>
      <div
        className={`mx-auto max-w-[1400px] px-8
         sm:px-14 md:px-16 pt-12 lg:pt-20 lg:px-12 h-full`}>
        {children}
      </div>
    </div>
  );
};

export default BodyContainer;
