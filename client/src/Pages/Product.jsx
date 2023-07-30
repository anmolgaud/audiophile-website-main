import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import ProductSmall from '../Compnents/atom/ProductSmall';
import ProductAlsoLike from '../Compnents/atom/ProductAlsoLike';
import ProductAmount from '../Compnents/atom/ProductAmount'
import {addItem} from '../Cart/cartSlice'
import {useDispatch} from 'react-redux';
import swal from 'sweetalert'

const Product = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [mainImg, setMainImg] = useState("");
  const [displayDescImg, setDisplayDescImg] = useState(false);
  const [currProdId, setCurrProdId] = useState(productId);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://audiophilebackend.onrender.com/api/product/${productId}`);
      let prod = res.data.data;
      setProduct(prod);
      setMainImg(prod.previewImgPath);
      setDisplayDescImg(true);
      setAmount(1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  },[currProdId,])

  const handleBack = () => {
    history.back();
  }


  return (
    <main className='mt-16 mx-4 md:mx-32'>
      <button className='text-gray-400 text-lg mb-4' onClick={handleBack}>Go Back</button>
      <section className='mt-4 grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col md:flex-row items-start'>
        <div className='w-full md:ml-8 md:order-2 rounded-lg py-6 bg-gray-200 flex justify-center items-center md:w-[70%]'>
          <img className='w-[80%] h-auto' src={`https://audiophilebackend.onrender.com/${mainImg}`} />
        </div>
        <div className='md:w-[10%] mt-4 md:mt-0'>
            <ul className='grid grid-cols-4 md:hidden gap-4'>
              {displayDescImg && product.descImgPath.map((path, index) => {
                return(
                  <ProductSmall key={index} currImg={mainImg} setMainImg={setMainImg} imgName={path} />
                )
              })}
              {!displayDescImg && <p>Loading...</p>}
            </ul>

            <ul className='hidden md:grid grid-rows-4 gap-4'>
              {displayDescImg && product.descImgPath.map((path, index) => {
                return(
                  <ProductSmall key={index} currImg={mainImg} setMainImg={setMainImg} imgName={path} />
                )
              })}
              {!displayDescImg && <p>Loading...</p>}
            </ul>
        </div>
      </div>

      {/* {Product description} */}
      <div className='mt-8 lg:mt-0'>
        <p className='text-amber-400 font-medium tracking-[0.2rem] uppercase'>{product.category}</p>
        <h1 className='mt-2 text-gray-800 text-3xl font-bold uppercase'>{product.name}</h1>
        <p className='mt-2 font-thin'>{product.description}</p>
        <p className='mt-4 text-red-600 tracking-tighter font-bold text-3xl'>{`$ ${product.price}`}</p>
        
        {/*product cart modifiers */}
        <div className='mt-4 flex gap-4'>
          <ProductAmount setAmount={setAmount} amount={amount}/>
          <button className='px-4 py-2 rounded-md bg-red-500 text-slate-100'
          onClick={() => {
            const payload = {
              _id: product._id,
              name: product.name,
              previewImgPath: product.previewImgPath,
              price: product.price,
              amount : amount,
            }
            dispatch(addItem(payload));
            swal({
              title : "Added to the cart",
              icon : "success",
              buttons : "Continue",
            });
          }}>Buy now</button>
        </div>
      </div>
      </section>

      <section className='flex flex-col justify-center items-center my-16'>
        <h3 className='text-4xl mb-8 font-bold text-gray-700'>You May Also Like</h3>
        <ProductAlsoLike currProdId={currProdId} setCurrProdId={setCurrProdId} category={String(product.category)}/>
      </section>
    </main>
  )
}

export default Product