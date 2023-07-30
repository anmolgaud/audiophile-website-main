import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const {_id:id, name, previewImgPath, price} = props;
    
  return (
    <Link to={`/product/${id}`}>
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-gray-200 w-[80%] xl:w-[90%] rounded-xl'>
            <img className='mx-auto my-auto w-[90%] h-auto' src={`https://audiophilebackend.onrender.com/${previewImgPath}`} />
            <div className='bg-gray-800 h-[1px]'/>
            <p className='ml-4 mt-2 font-semibold'>{name}</p>
            <p className='ml-4 font-bold text-lg'>{`$${price}`}</p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard