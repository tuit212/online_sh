import React from 'react' 
import "./Header.scss";
import { Link } from 'react-router-dom'
import HeaderInUserName from './HeaderInUserName';

function Head() {
  return (
    <>
     <div className='header-top'>
        <div className='container'>
          <div className='header__top'>
            <Link to={"Discounts"} className='header__top-link' title='Chegirmalar'>Chegirmalar</Link>
            <div className='header__top-lang'>
                <a className='header__top-lang-link' href='tel:+998912989808'>
                    +998 (91) 298 98 08
                </a>
                <p className='lang-active'>O'z</p>
                <p>Eng</p>
                <HeaderInUserName/>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Head
