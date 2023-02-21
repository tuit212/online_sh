import React from 'react' 
import { Link } from 'react-router-dom'

function Head() {
  return (
    <>
     <div className='header-top'>
        <div className='container'>
          <div className='header__top'>
            <Link to={"Discounts"}>Chegirmalar</Link>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Head
