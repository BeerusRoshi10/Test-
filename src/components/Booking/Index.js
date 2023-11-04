import React, { useState } from 'react';

import BodyContainer from '../Common/BodyContainer/BodyContainer';
import { toast } from 'react-toastify';

const Input = ({ label = '', type = 'text', placeholder = '', name, value, onChange }) => (
  <div
    className="flex gap-[15px] items-center justify-center relative mx-auto"
    style={{ width: 'fit-content' }}>
    <label className="font-semibold text-xl text-white absolute -left-[85px]">{label}:</label>
    <input
      className="font-semibold text-xl w-[300px] h-[40px] rounded-lg border-2 border-indigo-500 px-[5px]"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const Index = () => {
  const INITIAL_VALUE = {
    name: '',
    email: '',
    date: '',
    time: ''
  };

  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFormSubmission = () => {
    if (formData.name.length < 1) {
      toast.error('Please enter valid name');
      return;
    }
    if (formData.email.length < 1) {
      toast.error('Please enter valid email');
      return;
    }
    if (formData.date.length < 1) {
      toast.error('Please enter valid date');
      return;
    }
    if (formData.time.length < 1) {
      toast.error('Please enter valid time');
      return;
    }

    setIsFormSubmitted(true);
  };

  return (
    <BodyContainer rootClassName="h-screen">
      <section className="p-6 bg-indigo-500 rounded-md">
        <p className="text-white text-2xl text-center">Booking Form</p>
      </section>

      {isFormSubmitted ? (
        <section className="p-6 bg-gray-800 rounded-md flex-col mt-[20px]">
          <p className="text-center text-xl font-bold text-white">
            The booking has been confirmed sucessfully :)
          </p>
        </section>
      ) : (
        <section className="p-6 bg-gray-800 rounded-md flex-col mt-[20px]">
          <form className="flex flex-col gap-[25px] justify-center w-full">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Enter name ..."
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Enter email ..."
            />
            <Input
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleFormChange}
              placeholder="Enter date ..."
            />
            <Input
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleFormChange}
              placeholder="Enter time ..."
            />
          </form>

          <section className="flex justify-center w-full mt-[30px]">
            <button
              className="bg-indigo-500 px-[20px] py-[10px] text-lg font-bold rounded-md
       text-white  cursor-pointer transition-all ease-in duration-150 hover:bg-white hover:text-black
            "
              onClick={handleFormSubmission}>
              Book Now
            </button>
          </section>
        </section>
      )}
    </BodyContainer>
  );
};

export default Index;
