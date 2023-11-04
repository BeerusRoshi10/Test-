import React from 'react';
import BodyContainer from '../BodyContainer/BodyContainer';

const FallbackLoader = () => {
  return (
    <BodyContainer>
      <main className="h-screen w-full">
        <section className="h-[calc(100%-300px)] w-full">
          <></>
        </section>
      </main>
    </BodyContainer>
  );
};

export default FallbackLoader;
