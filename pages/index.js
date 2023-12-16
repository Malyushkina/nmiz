'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className='flex min-h-screen flex-col items-center justify-start '>
      <Head>
        <title>НМИЦ онкологии им. Н.Н. Блохина</title>
        <meta
          name='description'
          content='рекомендательная система для больных раком лёгких НМИЦ онкологии им.
          Н.Н. Блохина'
        />
      </Head>
      <div className=' py-3 px-4 max-w-5xl mb-24'>
        О центре НМИЦ Онкологии им. Н.Н. Блохина ФГБУ «Национальный медицинский
        исследовательский центр онкологии им. Н.Н. Блохина» Минздрава России –
        крупнейшая онкологическая клиника России и Европы, одна из самых крупных
        онкологических клиник в мире, имеющая в своем арсенале новейшее
        оборудование и все передовые методики диагностики и лечения рака. Своей
        целью мы видим непрерывное улучшение качества и доступности
        онкологической помощи. Для достижения этой цели мы работаем над
        совершенствованием системы организации медицинской помощи и внедрением
        последних технологий.
      </div>
      <button
        className='rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
        type='button'
        onClick={() => router.push('/form')}
      >
        Получить рекомендацию
      </button>
    </main>
  );
}
