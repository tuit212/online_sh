import React  from 'react'
import "./scss/Carusel.scss"
import Banner2 from "../Assets/images/banner2.png";
import Directory from './Directory';

function Carusel() {

    let LeftCarusel = () => {
        console.log("asadbek");

    }

    const RightCarusel = () => {
        console.log("asadbek");

    }
  return (
    <>
      <div className='container'>
        <div className='site-carusel'>
            <div className='carusel_katalog'>
                <Directory/>
            </div>
            <div className='carusel'>
                <div  id='carouselList' style={{transform:'translateX(0px)'}}>
                    <div className='carusel__item'>
                        <img src={Banner2} alt="carusel" />
                    </div>
                    <div className='carusel__item'>
                        <img src={Banner2} alt="carusel" />
                    </div>
                    <div className='carusel__item'>
                        <img src={Banner2} alt="carusel" />
                    </div>
                    <div className='carusel__item'>
                        <img src={Banner2} alt="carusel" />
                    </div>
                </div>
                <button onClick={LeftCarusel} className='LeftCarusel '>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button onClick={RightCarusel} className='RightCarusel'>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Carusel
