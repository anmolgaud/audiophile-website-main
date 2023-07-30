import React from 'react'
import {AiOutlineInstagram, AiFillFacebook, AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {

  return (
    <>
    <div className='relative bottom-0 min-w-full'>
    <footer className='bg-slate-100 mx-6 lg:mx-16 rounded-md mt-16 flex flex-col justify-center items-center'>
        <p className='text-center my-2'>© 2023 Hooman Marketing Limited. <br className='block md:hidden' /> All Rights Reserved.</p>
        <div className='h-[1px] w-full bg-slate-400' />
        <div className='w-full my-8 grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full col-end-2 flex flex-col justify-center items-center'>
                <p className='text-3xl font-extrabold'>audiophile</p>
                <p className='text-xl my-2 font-medium'>Subscribe to our email alerts!</p>
                <input className='h-8 w-[80%] md:w-[60%] rounded-md placeholder:pl-2 placeholder:font-thin outline-none' placeholder='Enter your email!' type='email' name='email'/>
            </div>

            <div className='mt-8'>
                <p className='text-lg text-center mb-2'>Contact Us</p>
            <div className='flex flex-row place-content-center items-center'>
                <AiOutlineInstagram className="mr-4 cursor-pointer" size={"2rem"}/>
                <AiFillFacebook className="mx-4 cursor-pointer" size={"2rem"}/>
                <AiOutlineGithub className="ml-4 cursor-pointer" size={"2rem"}/>
            </div>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Footer