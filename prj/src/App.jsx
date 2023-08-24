import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import CarList from './components/CarList'
import { useEffect } from 'react'
import { calculateTotal } from './control/cartSlice'
import { useSelector , useDispatch } from 'react-redux' 
function App() {
  const {cartItems}  = useSelector((store)=>store.cart)
 const dispatch = useDispatch();

  useEffect(() => {
      dispatch(calculateTotal());
   
  }, [cartItems])
  
  return (
    <div className='App'>
        <Navbar/>
        <CarList/>
       </div>
  )
}

export default App
