import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

const ProductAlsoLike = (props) => {
    const {currProdId, setCurrProdId, category} = props;
    const [similarProd, setSimilarProd] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://audiophilebackend.onrender.com/api/product")
            let arr = res.data.data.filter((item) => item.category === category)
            setSimilarProd(arr);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(()=>{
        fetchProducts();
    }, [similarProd,])

  return (
    <div>
        <ul className='grid lg:grid-cols-4 grid-cols-2 gap-y-4'>
        {similarProd.map((prod) => {
            return(
            <li key={prod._id} onClick={() => setCurrProdId(prod._id)}>
                <ProductCard {...prod}/>
            </li>
            )
        })}
        </ul>
    </div>
  )
}

export default ProductAlsoLike