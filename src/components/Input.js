import { useState } from 'react';

export default function Input(props) {
  let { name, options, label, currentValue, setFormData, formData } = props;

  const currentOptions = options.map((elem, index) => {
    return (
      <option key={index} value={index}>
        {elem}
      </option>
    );
  });
  const [selectedInput, setSelectedInput] = useState(0);
  currentValue = selectedInput;

  return (
    <div className='flex flex-col w-1/2 p-4'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={name}
      >
        {label}
      </label>
      <div className='relative'>
        <select
          className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
          rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          id={name}
          name={name}
          value={selectedInput}
          onChange={(e) => {
            setSelectedInput(e.target.value);
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          }}
        >
          {currentOptions}
        </select>
      </div>
    </div>
  );
}
