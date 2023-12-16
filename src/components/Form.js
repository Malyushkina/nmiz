'use client';
import Input from './Input';

import { FIELDS } from '../constants.js';

export default function Form({formData, setFormData, handleSubmit }) {
  const currentFields = FIELDS.map((elem, index) => {
    return (
      <Input
        key={index}
        name={elem.name}
        options={elem.options}
        setFormData={setFormData}
        formData={formData}
        label={elem.label}
      />
    );
  });
  return (
    <div className='flex h-screen flex-col mr-auto ml-auto max-w-5xl align-middle'>
      <h2 className='w-full inline-block font-bold uppercase text-center text-gray-700 py-3 px-4 mb-5'>
        Для получения рекомендации заполните форму
      </h2>
      <div className='w-full flex-none '>
        <form
          className='w-full max-w-5xl flex flex-wrap'
          id='form1'
          onSubmit={handleSubmit}
        >
          {currentFields}
          <div className='p-4'>
            <button
              type='submit'
              className='rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
