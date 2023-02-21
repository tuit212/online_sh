import React from 'react'

function LikeCard() {
  return (
    <>
      <ul className='header__card'>
        <li className='header__card-item' title='Sevimlilar'>
            <div><i class="fa fa-heart"></i></div>
            <p>Sevimlilar</p>
            <span id='Sevimlilar'>0</span>
        </li>
        <li className='header__card-item' title='Korzinka' >
            <div><i class="fa-solid fa-cart-shopping" id='Korzinka'></i></div>
            <p>Korzinka</p>
            <span id='Korzinka'>0</span>
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
