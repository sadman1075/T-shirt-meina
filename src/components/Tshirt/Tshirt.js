import React from 'react';
import'./Tshirt.css'

const Tshirt = ({tshirt,handleaddtocart}) => {
    const {picture,name,gender,price,index}=tshirt
    return (
        <div className='tshirt'>
            <img src={picture}></img>
            <h2>{name}</h2>
            <h4>{price}$</h4>
          
            <button onClick={()=>handleaddtocart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;