import React from 'react'
import Product from './Product'

export default function Home() {
  return (
    <div className='hero'> 
      <div class="card bg-dark text-white border-0">
  <img src="/assets/bg.jpg" class="card-img" alt="Background" height="800px"     />
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
    </div>
  </div>
</div>
<Product/>
    </div>
  )
}
