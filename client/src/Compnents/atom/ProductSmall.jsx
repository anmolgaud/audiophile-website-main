import React from 'react'

const ProductSmall = (props) => {
    const {setMainImg, imgName, currImg} = props;
    const changeMainImage = () => {
        setMainImg(imgName);
    }
    
  return (
    <li onClick={changeMainImage} className={`rounded-lg p-2 ${(imgName === currImg) ? "bg-red-400" : "bg-gray-200"}`}>
        <img src={`https://audiophilebackend.onrender.com/${imgName}`} />
    </li>
  )
}

export default ProductSmall