import React from 'react'
import {BsFillBasket3Fill} from 'react-icons/bs'
import { useSelector } from 'react-redux' 
import { store } from '../store'
const Navbar = () => {
    const {quantity} = useSelector((store)=> store.cart)
    
  return (
    <nav>
        <div className='navb'>
            <h3>Redux Uygulaması</h3>
            <div className='basket'>
              <div className='number'>
              <p>{quantity}</p>  
              </div>
                
                <BsFillBasket3Fill className='ball'/>
            </div>
          
        </div>
    </nav>
  )
}

export default Navbar
