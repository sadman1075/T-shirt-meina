import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const[cart,setcart]=useState([]);
    const handleaddtocart=tshirt =>{
        const exsists=cart.find(ts=>ts._id===tshirt._id)
        if(exsists){
            alert('tshirt already added')
        }
        else{ const newcart=[...cart,tshirt];
            setcart(newcart)}
       
    }
    const handleremovetocart=tshirt=>{
        const remaining=cart.filter(ts=>ts._id!==tshirt._id);
        setcart(remaining)

    }
    return (
        <div className='home-container'>
      <div className="tshirt-container">
      

{
    tshirts.map(tshirt=><Tshirt key={tshirt.id} tshirt={tshirt} handleaddtocart={handleaddtocart}></Tshirt>)
}
      </div>
      <div className="cart-container">
        <Cart cart={cart}
        handleremovetocart={handleremovetocart}></Cart>
      </div>
        </div>
    );
};

export default Home;