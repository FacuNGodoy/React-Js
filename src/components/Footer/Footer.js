import './Footer.css'
import pikachu from '../../Assets/Img/pikachu.gif'
import pokemon from '../../Assets/Img/logo.png'
import { Link } from 'react-router-dom'

import React from 'react'

const Footer = () => {
  return (
    <div className='footerCont'>
        <img src={pokemon} className="pokemon-logo" alt="logo" />
        <div className='footerContCont'>
            <div className='footerContCont'>
                <img src={pikachu} alt="pikachu"></img>
                <div className='footerLista'>
                  <ul>
                    <li>
                    <Link className="nav-link active footerLetra" to={'/'}>Inicio</Link>
                    </li>
                    <li>
                    <Link className="nav-link active footerLetra" to={'/cart'}>Su Compra</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                    <Link className="nav-link active footerLetra" to={'/category/comun'}>Comun</Link>
                    </li>
                    <li>
                    <Link className="nav-link active footerLetra" to={'/category/raro'}>Raro</Link>
                    </li>
                    <li>
                    <Link className="nav-link active footerLetra" to={'/category/ultraRaro'}>UltraRaro</Link>
                    </li>
                  </ul>
                </div>
                <img src={pikachu} alt="pikachu"></img>
            </div>
        </div>
        <h2 className='footerLetra diseñador'>Diseñador Web Facundo Godoy®</h2>
    </div>
  )
}

export default Footer