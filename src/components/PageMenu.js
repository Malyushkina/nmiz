import Image from 'next/image';
import Link from 'next/link';

export default function PageMenu() {
  return (
    <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mr-auto ml-auto mb-10 mt-4'>
      <a
        className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
        href='https://www.ronc.ru/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/logo.png'
          alt='RONC Logo'
          className='dark:invert'
          width={100}
          height={128}
          priority
        />
      </a>

      <h1 className='fixed uppercase left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
        Рекомендательная система для больных раком лёгких от НМИЦ онкологии им
        Н.Н. Блохина
      </h1>
      <Link
        className='rounded-md bg-slate-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
        href={'/'}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6'
        >
          <path
            fillRule='evenodd'
            d='M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z'
            clipRule='evenodd'
          />
        </svg>
      </Link>
      <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'></div>
    </div>
  );
}
