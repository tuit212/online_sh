import React from 'react' 
import { Link } from 'react-router-dom'

function LikeCard() {
  return (
    <>
      <ul className='header__card'>
        <Link to={"/like"} className='header__card-item' title='Sevimlilar'>
            <div><i class="fa fa-heart"></i></div>
            <p>Sevimlilar</p>
            <span id='Sevimlilar'>0</span>
        </Link>
        <Link to={"/cart"} className='header__card-item' title='Korzinka' >
            <div><i class="fa-solid fa-cart-shopping" id='Korzinka'></i></div>
            <p>Korzinka</p>
            <span id='Korzinka'>0</span>
        </Link>
        <li className='header__card-item' title='Kirish'>
            <div><i class="fa-sharp fa-solid fa-truck"></i></div>
            <p>Truck</p>
        </li>
        <li className='header__card-item' title='Kirish'>
            <div><i class="fa-solid fa-user" ></i></div>
            <p>Kirish</p>
        </li>
      </ul>
    </>
  )
}

export default LikeCard
