import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products,setProducts]=useState([]);
    
    useEffect(() => {
       const fetchProducts=async()=>{
      const res=await  fetch('https://fakestoreapi.com/products');
      const data=await res.json();
      setProducts(data)
            
           
       }
       

       fetchProducts()
    }, []);
    console.log(products)
  return (
    <div className='productsWrapper'>
        {
            products.map((product)=>(


<div className='card' key={product.id}>
    <img src={product.image} alt="" />
    <h3>Name:{product.title}</h3>
    <h5>Category:{product.category}</h5>
    <p>Description:{product.description}</p>
    <h5>Price:{product.price}</h5>
    <button className='btn1'>add to cart</button>

</div>



                
            ))
        }
    </div>
  )
}

export default Products