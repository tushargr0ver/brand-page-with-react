import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import amazon_logo from './assets/amazon.png'
import flipkart_logo from './assets/flipkart.png'
import shoe_image from './assets/shoe_image.png'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='main'>
        <div>
          <div className='big-text'>YOUR FEET DESERVE THE BEST</div>
          <div className='small-text'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</div>
          <div className='buttons'>
            <a href="#"><button className='shop-now'>Shop Now</button></a>
            <a href="#"><button className='category'>Category</button></a>
          </div>
          <div className='icon-caption'>Also Available on</div>
          <div className='icons'>
            <img src={flipkart_logo} className='logo1' alt="" />
            <img src={amazon_logo} className='logo2' alt="" />
          </div>
        </div>
        <img className='product-image' src={shoe_image} alt="" />
      </div>
    </div>
  )
}

export default App