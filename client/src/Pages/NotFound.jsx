import React from 'react'
import Footer from '../Compnents/Footer';

const NotFound = () => {
  return (
    <main className="m-6 min-h-[70vh]">
      <section className='flex flex-col justify-center items-center'>
      <img
        src="/NotFound.webp"
        width="300"
        height="300"
      />
      <div className='mt-8 flex flex-col'>
        <h1 className='text-5xl font-bold text-sky-400'>OOPS!</h1>
        <p className='text-lg'>Page Not Found!</p>
      </div>
      </section>
    </main>
  );
}

export default NotFound