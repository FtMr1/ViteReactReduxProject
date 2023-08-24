import React from 'react'
import {BsChevronCompactUp , BsChevronCompactDown} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeItem , increase , decrease } from '../control/cartSlice'




const CarsITem = ({id , title ,price, img , quantity}) => {
    const dispatch = useDispatch();
  return (
    <div className='cart'>
        <img src={img}  alt="" />
        <div>
            <h4>{title}</h4>
            <h4>{price} TL</h4>
            <div>
                <button className='up'>
                    <BsChevronCompactUp onClick={()=>{dispatch(increase(id))}} className='up'/>
                  
                    
                </button>
                <p>{quantity}</p>
                <button className='up'>
                    <BsChevronCompactDown onClick={()=>{dispatch(decrease(id))}} className='up'/>
                </button>
            </div>
            <button onClick={()=>{dispatch(removeItem(id))}} className='cart-dlt'>Sil</button>
        </div>
    </div>
  )
}

export default CarsITem
