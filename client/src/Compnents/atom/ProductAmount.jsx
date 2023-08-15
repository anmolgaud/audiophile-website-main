import React from 'react'
import {FiChevronUp, FiChevronDown} from 'react-icons/fi';

const ProductAmount = (props) => {
  const {setAmount, amount} = props
  const inc = () => {
    setAmount(amount + 1);
  }
  const dec = () => {
    if(amount > 1)
      setAmount(amount - 1);
  }
  return (
    <div className='flex justify-center gap-2 p-1 rounded-md items-center border-2 border-gray-700'>
        <FiChevronDown onClick={dec} size={"1.2rem"}/>
        <div>{amount}</div>
        <FiChevronUp onClick={inc} size={"1.2rem"}/>
    </div>
  )
}

export default ProductAmount