import { Link } from 'react-router-dom';
import React from 'react';
 

const SideBar=()=>{
    return(
        <div className='Sidebar-content'>
             <Link to = "/"><i className ="fa-solid fa-cloud"></i></Link>
             {/* <Link to ="/dustinfo"><i class="fa-regular fa-map-location"></i></Link> */}
        </div>
    )
}

export default SideBar