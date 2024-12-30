import React from 'react'
import mahindra from '../../Static/mindra.jpg'
import audi from '../../Static/audi.jpg'
import benze from '../../Static/benze.jpg'
import hyundai from '../../Static/hyundai.jpg'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={mahindra} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={benze} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={audi} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={hyundai} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>

      </div>
      
    </div>
  )
}

export default Home