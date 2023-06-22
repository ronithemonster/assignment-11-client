import React from 'react';
import { Link } from 'react-router-dom';

const CardAllToys = ({toys}) => {
    const{sub_category,price,name,seller_name,picture_url,_id} = toys;
    console.log(toys);
    
    return (
        <div className="card w-80 h-96 cursor-pointer  hover:shadow-xl hover:bg-green-100">
        <figure><img src={picture_url} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
         {name}
            <div className="bg-green-500 text-white rounded-md text-sm px-2"> {sub_category}</div>
          </h2>
          <p className='text-3xl'>{price}</p>
          <p className='text-lg mt-0'>  {seller_name}</p>

        <Link to={`/details/${_id}`}><button className="btn btn-outline btn-sm btn-primary">Details</button></Link>


        
          
        </div>
      </div>
    );
};

export default CardAllToys;