import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './atom/ProductCard';

const HomeProduct = () => {
    const [productData, setProductData] = useState([]);

    const fetchProductData = async () => {
        try {
            const res = await axios.get("https://audiophilebackend.onrender.com/api/product");
            setProductData(res.data.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() =>{
        fetchProductData();
    }, [])

  return (
    <main className='mx-4 mb-8 flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-serif font-semibold'>Best Seller Products</h3>
        <h3 className='text-gray-600'>Explore Reality</h3>
        <div className='mt-4 xl:w-[80%] grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center'>
            {productData.map((prod) => {
                return(
                    <ProductCard key={prod._id} {...prod} />
                )
            })}
        </div>

    </main>
  )
}

export default HomeProduct;