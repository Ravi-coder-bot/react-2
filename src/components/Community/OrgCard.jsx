 import { useState } from 'react';
import './OrgCard.css'
 
 export const OrgCard = () => {
    const[content,setContent]=useState([{header : " ", content : ""}]);

    const orgImages = [{source:""},{source:''},{source:""}];
    
    const handleContent = ()=>{
        setContent(()=>{
        
        })  
    }

    const handleImage =() =>{
        
    }



   return (
     <div className="Org1">
        <div className="Org2">
            <div className='img'>
                <img src="" alt="" />
            </div>
            <div className='org-content'>{content}</div>


        </div>
     </div>
   )
 }

 export default OrgCard;
 