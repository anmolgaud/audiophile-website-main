import React from 'react'
import Footer from '../Compnents/Footer';

const Congratulation = () => {
  return (
    <main className='min-h-[70vh] mt-8'>
      <section className="flex flex-col justify-center items-center gap-4">
      <img width="300" height="337" src={"/robotDancing.webp"} alt='congrats' />
      <div className='flex flex-col gap-4'>
        <h3 className='text-5xl font-semibold text-sky-500'>Congratulation</h3>
        <p className='text-2xl'>Product will be delivered soon!</p>
      </div>
      </section>
    </main>
  );
}

export default Congratulation