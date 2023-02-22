
import React from 'react' 
import "./scss/Directory.scss";

function Directory() {
  return (
    <>
      <div className='site-directory'>
        <ul className='directory__list'>
            <li className='directory__item'>
                <div className='directory__line'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                Barcha Bo'limlar
            </li>
            <li className='directory__item'>
                Yangi kelganlar
            </li>
            <li className='directory__item'>
                <i class="fa-solid fa-mobile-button"></i>
                Telifon
            </li>
            <li className='directory__item'>
                <i class="fa-solid fa-tv"></i>
                Telivizorlar
            </li>
            <li className='directory__item'>
                <i class="fa-solid fa-shirt"></i>
                Kiyimlar
            </li>
            <li className='directory__item'>
                <i class="fa-solid fa-dumbbell"></i>
                Sport Buyumlari
            </li>
            <li className='directory__item'>
                <i class="fa-sharp fa-solid fa-percent"></i>
                Chegirmalar
            </li>
        </ul>
      </div>
    </>
  )
}

export default Directory
