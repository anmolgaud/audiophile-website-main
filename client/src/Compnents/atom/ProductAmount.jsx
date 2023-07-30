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
        <FiChevronDown size={"1.2rem"} onClick={dec} />
        <div>{amount}</div>
        <FiChevronUp size={"1.2rem"} onClick={inc} />
    </div>
  )
}

export default ProductAmount