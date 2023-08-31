
import { Link } from "react-router-dom";
import React from "react";
import data from "./Data.json";

 const Finance = () => {
     
  return (
      
        <div> 
         {data[0].finance.map(item => (
         <div key={item.id}> 
 
       <hr className='hr_main'></hr>
        <div className='final'>
                      
       <Link to="./Home/Putin" className='text'>
        <div className='img'><img src={item.image}/></div>
                            
       <h4> {item.title}</h4> </Link>                                                                             
                                                                   
        <Link className='span'>
          <h4> {item.description}</h4>
         </Link>
       </div>
         <hr className='hr_main'></hr>
    
  </div>
  ))}
        </div>
      );
}
 
export default Finance;