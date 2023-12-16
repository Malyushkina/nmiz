export default function Predict({ props }) {
  console.log('props', props);

  return (
    <div className='flex h-screen flex-col mr-auto ml-auto max-w-5xl align-middle '>
      <div className='align-middle pt-12 mr-auto ml-auto' >{props}</div>
    </div>
  );
}
