import Form from '../src/components/Form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function FormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    race: 0,
    gender: 0,
    age: 0,
    smoking: 0,
    ekog: 0,
    tumor: 0,
    kras: 0,
    p53: 0,
    stk11: 0,
    keap1: 0,
    hlt: 0,
    molecularStatus: 0,
    pdl1: 0,
    preference: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({ pathname: '/predict', query: formData });
  };


  return (
    <Form
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      formData={formData}
    />
  );
}
