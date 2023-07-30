import React from 'react'
import { Link } from 'react-router-dom'

const SaleBanner = (props) => {
  const {_id:id, smText, mdText, lgText, description, imagePath} = props;
  return (
    <>
      <section className="mx-4 md:hidden flex flex-col justify-center items-center bg-red-500 rounded-md">
        <div className="text-slate-50 flex flex-col justify-center items-center">
          <h5 className="mt-4">{smText}</h5>
          <h3 className="text-6xl text-center font-extrabold">{mdText}</h3>
          <p className="mt-4">{description}</p>
        </div>
        <img
          className="w-[80%] h-auto"
          src={`https://audiophilebackend.onrender.com/${imagePath}`}
        />
        <Link to={`/product/${id}`}>
          <button className="px-4 py-2 mb-8 rounded-xl bg-slate-50 text-red-500">
            Shop Now
          </button>
        </Link>
      </section>
      <section className="hidden md:mx-4 lg:mx-16 lg:mt-32 md:rounded-xl bg-red-500 md:grid md:grid-cols-2">
        <div className="text-slate-50 mt-4 flex flex-col justify-center items-center">
          <h5 className="mt-4 xl:text-xl">{smText}</h5>
          <h3 className="text-6xl xl:ml-4 xl:text-8xl text-center font-extrabold">{mdText}</h3>
          <p className="mt-4 xl:text-2xl">{description}</p>
          <Link to={`/product/64b8fc3b7f98784af8eb7ea5`}>
          <button className="px-4 py-2 mb-4 mt-4 lg:mt-8 lg:px-6 lg:py-3 lg:text-xl lg:font-medium rounded-xl bg-slate-50 text-red-500">
            Shop Now
          </button>
          </Link> 
        </div>

        <div className='relative w-full flex items-center justify-evenly'>
        <img
          className="lg:w-[80%] xl:w-[70%] h-auto"
          src={`https://audiophilebackend.onrender.com/${imagePath}`}
        />
       </div>
      </section>
    </>
  );
}

export default SaleBanner