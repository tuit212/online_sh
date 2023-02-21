import React from 'react' 
import { Link } from 'react-router-dom'
import LikeCard from './LikeCard'

function Navbar() {
  return (
    <>
      <header className='site-header'>
        <div className='container'>
            <div className='header'>
                <Link to={"/"} className="header__link">
                    <p>
                        <span>P</span>ro<span>E</span>xet
                    </p>
                </Link>
                <div className='header__form'>
                    <input type={"text"} placeholder="Qidirish..."/>
                    <button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <LikeCard/>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
