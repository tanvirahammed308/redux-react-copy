import React from 'react'
import Products from '../components/Products';

const Home = () => {
  return (
    <div className='home'>
       <h2 className='home-title'>welcome to redux tooltik shop</h2>
       <section>
        <h3>Products</h3>
        <Products ></Products>
       </section>
    </div>
  )
}

export default Home