import React from "react";

function InputField({ name, field, register, errors, type }) {
  return (
    <div className='mb-6 lg:w-[300px] '>
      <label
        htmlFor='base-input'
        className='block mb-2 text-sm  text-white font-bold '
      >
        {name}
      </label>
      <input
        type={type}
        id='base-input'
        {...register(field, {
          required: true          
        })}
        className='bg-gray-50 border border-gray-300 text-blue-600 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
      />
      {errors[field] && (
        <div className='text-red-500 font-bold absolute  text-[12px]'>Requiered!</div>
      )}
    </div>
  );
}

export default InputField;
