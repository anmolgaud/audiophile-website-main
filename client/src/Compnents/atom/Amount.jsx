import React, { useState } from 'react'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { incItemAmt, decItemAmt, removeItem } from '../../Cart/cartSlice';

const Amount = (props) => {
  const {id, amount} = props;
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center gap-2 p-1 rounded-md items-center border-2 border-gray-700'>
        <FiChevronDown size={"1.2rem"} 
        onClick={()=>{
          if(amount === 1)
            return dispatch(removeItem(id));
          dispatch(decItemAmt(id));
          }}/>
        <div>{amount}</div>
        <FiChevronUp onClick={()=>{dispatch(incItemAmt(id))}} size={"1.2rem"}/>
    </div>
  )
}

export default Amount