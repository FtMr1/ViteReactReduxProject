import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import CarsITem from './CarsITem';
import { clearCart } from '../control/cartSlice';


function CourseList() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section className='main'>
          <header>
            <h2>Sepetim</h2>
            <h4>bomboş</h4>
          </header>
        </section>
      ) : (
        <section className='main'>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((car , index) => {
              return <CarsITem {...car} key={index}/>;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button className='clear-btn' onClick={()=>dispatch(clearCart())}>Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
