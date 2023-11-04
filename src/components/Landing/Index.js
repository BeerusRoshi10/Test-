import React from 'react';
import BodyContainer from '../Common/BodyContainer/BodyContainer';
import lemon from '../../assets/lemon.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <BodyContainer rootClassName="h-screen">
      <section className="p-6 bg-indigo-500 rounded-md">
        <p className="text-white text-2xl text-center">Welcome to the Little Lemon Restaurant</p>
      </section>

      <section className="p-6 bg-gray-800 rounded-md flex-col mt-[20px]">
        <img src={lemon} className="w-6/12 m-auto" />
        <p className="text-white text-lg  mt-[10px] text-center font-bold">
          Want to wat food? Click below to book now !!
        </p>

        <section className="flex justify-center w-full mt-[30px]">
          <button
            className="bg-indigo-500 px-[20px] py-[10px] text-lg font-bold rounded-md
           text-white m-auto cursor-pointer transition-all ease-in duration-150 hover:bg-white hover:text-black"
            onClick={() => navigate('/booking')}>
            Book Now
          </button>
        </section>
        <p className="text-white text-lg font-light mt-[40px]">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </section>
    </BodyContainer>
  );
};

export default Landing;
