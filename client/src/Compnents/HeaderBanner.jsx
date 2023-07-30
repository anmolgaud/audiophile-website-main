import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBanner = (props) => {
    const {smText, mdText, lgText, description, imagePath} = props;

  return (
    <>

    <section className='bg-gray-300 p-6 flex flex-col md:flex-row gap-4 mx-4 my-8 rounded-xl lg:hidden'>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <p className=''>{smText}</p>
            <p className='text-slate-100 text-5xl font-bold'>{lgText}</p>
            <p className='italic font-medium text-cyan-500'>Experience Nirvana</p>
        </div>
        <img className='w-[80%] md:w-[50%]' src={`https://audiophilebackend.onrender.com/${imagePath}`} alt='header banner'/>

    </section>

    <section className='hidden lg:block relative bg-zinc-300 m-16 rounded-xl'>
        <div className='relative pt-16 pr-16 pl-8 pb-8 place-items-center grid grid-cols-3'>
            <div className='col-start-1 col-end-3 mb-16'>
                <h5 className='lg:text-xl font-medium'>{smText}</h5>
                <h3 className='lg:text-4xl xl:text-6xl font-semibold'>{mdText}</h3>
                <h1 className='lg:text-7xl xl:text-8xl font-bold text-slate-50 uppercase'>{lgText}</h1>
                <Link to="/product/64b8fc3b7f98784af8eb7ea6">
                    <button className='bg-rose-600 mt-8 px-6 py-1 rounded-lg text-slate-50 text-lg'>Shop Now</button>
                </Link>
            </div>
            <div className='absolute'>
                <img className='relative left-32 w-[60%] xl:w-[80%] h-auto' src={`https://audiophilebackend.onrender.com/${imagePath}`} />
            </div>
            <div className='grid row-span-3 place-self-end'>
                <div className='row-start-3 row-end-4 flex flex-col items-end'>
                    <h3 className='font-semibold text-indigo-700'>Description</h3>
                    <p className='text-right text-sm xl:text-base'>{description}</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeaderBanner