import React from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import { useDispatch} from 'react-redux';
import { removeItem } from '../../Cart/cartSlice'

import Amount from './Amount';

const CartProductCard = (props) => {
    const {_id:id, previewImgPath, name,price, amount} = props;
    const dispatch = useDispatch();

  return (
    <div className='mx-2 md:mx-0 md:w-[80%] flex justify-between items-center bg-white py-2 rounded-lg'>
        <div className='col-end-2 mx-2 md:mx-4 w-[30%] md:w-[20%] lg:w-[30%] place-self-center bg-gray-300 rounded-md'>
            <img src={`https://audiophilebackend.onrender.com/${previewImgPath}`} />
        </div>

        <div className='w-full mr-2 md:mx-4'>
            <div className='w-full flex justify-between '>
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <div className='mt-2 flex justify-between items-center'>
                <Amount id={id} amount={amount}/>
                <MdDeleteOutline className="text-red-500 cursor-pointer" size={"1.5rem"}
                onClick={()=>{dispatch(removeItem(id))}}/>
            </div>
        </div>
    </div>
  )
}

export default CartProductCard