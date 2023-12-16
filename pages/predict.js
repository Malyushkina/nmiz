import Predict from '@/components/Predict';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PredictPage() {
  const router = useRouter();
  const [answer, setAnswer] = useState();
  const data = dataService(router.query);
  useEffect(() => {
    fetch('http://localhost:8080/predictions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: data }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAnswer(data.answer);
      });
  });

  console.log(answer);
  return <Predict props={answer} />;
}

const dataService = (data) => {
  const result = [];
  for (const key in data) {
    result.push(Number(data[key]));
  }

  return result;
};
