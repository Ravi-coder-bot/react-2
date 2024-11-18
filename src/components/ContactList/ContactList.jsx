import { useState } from 'react';
import './ContactList.css'
import { v4 as uuidv4 } from 'uuid';

 const ContactList = () => {
    const[contacts,setContact]=useState([{text:"police",number:100,id : uuidv4()}]);
    const[newContactName,setNewContactName] =useState("");
    const[newContactNumber,setNewContactNumber]=useState("");
    

    const currContact = (event)=>{
        setNewContactNumber(event.target.value);
    }
    const currName = (event)=>{
        setNewContactName(event.target.value);
    }

    const addContact = ()=>{
        if (newContactName && newContactNumber){
             setContact((prevContact)=>{
            return[...prevContact,{text : newContactName,number : newContactNumber,id : uuidv4()}]
        });
        setNewContactName("");
        setNewContactNumber("");
        } else{
            alert("please enter both name and number");
        }
    }

    const deleteContant =(id)=>{
        setContact((prevContact)=>{
            return prevContact.filter((contact)=> contact.id !== id)
        }
        )
    }

   const callOne =(text)=>{
    alert("calling to "  + text);
   }

    const callAll = () => {
        alert("calling to all off your Contacts")
    }

  return (
    <div className='contact-card'>
        <div className="bigcard2">
        <div className='bigcard3'>
        <h1>Add Contacts</h1>
        <input className='input1' type="text" value={newContactName} onChange={currName}  placeholder='Name'/>
        <input className='input2' type="tel" value={newContactNumber} onChange={currContact} placeholder='Number'/>
        <button className='add-contact' onClick={addContact} >Add Contact</button>
        <div className='contact-list'>
            <p className='your-contact'>Your Contacts</p>
            <div className='listing'>
                <div className='listing1'>
                <ul className='ul-list'>{
                    contacts.map((contact)=>{
                        return(<li className='list' key = {contact.id}>
                              Name : {contact.text}
                        </li>)
                    })}
                </ul>
            </div>
            <div className='listing2'>
                 <ul className='ul-list'>{
                    contacts.map((contact)=>{
                        return(<li className='list' key = {contact.id}>
                              Number : {contact.number}
                        </li>)
                    })}
                </ul>
            </div>
            <div className='listing3'>
                <ul className='ul-list'>{
                    contacts.map((contact)=>{
                        return(<li className='list1' key = {contact.id}>
                              <button className='delete' onClick={()=>deleteContant(contact.id)}>Delete</button>
                        </li>)
                    })}
                </ul>
            </div>
            <div className='listing4'>
                <ul className='ul-list'>{
                    contacts.map((contact)=>{
                        return(<li className='list1' key = {contact.id}>
                              <button className='call' onClick={()=>callOne(contact.text)}>Call</button>
                        </li>)
                    })}
                </ul>
            </div>
            </div>
            <button onClick={callAll} className='call-all'>Call to all</button> 
        </div>


            </div>
        
        </div>
    </div>
  )
}


export default  ContactList;

