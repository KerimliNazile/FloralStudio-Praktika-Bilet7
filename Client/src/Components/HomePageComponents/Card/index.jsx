import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import "./index.scss";


const Card = ({ id, image, name, price }) => {
  
  console.log(id);
  return (

   
      <div className='card0'>
        <div className='CardIcon'>
          <div ><FaHeart /></div>
          <div ><Link to={`/${id}`}> <FaRegEye className='regeye'/> </Link></div>
        </div>
        <div className='add'>
        </div>
        <div className='card-comp'>
          <div className='image'>
            <img src={image} alt="" />
          </div>
        </div>

        <div className="content">
          <h2>{name}</h2>
          <h2>{price}</h2>
         
          {/* <span className='discount'> <del>${price}</del></span> */}
         
        </div>
      </div>


  )
}

export default Card