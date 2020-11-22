import React,{useState, useEffect} from 'react'
import './style.css'
import axios from '../axios'

function EntryForm({click, setClick}) {
  const [form , setForm] = useState([])
  const [text, setText] = useState({})





  const handleChange = (e) =>{
      setText({...text, [e.target.name] : e.target.value})
      console.log(handleChange)
     }


 const postData  = async ()=>{
     const result = await axios.post('/' , text);
     console.log(result)

 };

 useEffect(() => {}, [])


    return (
        <>
      {click ? ( 
      <div className = 'container1'> 
         <div className = 'container1_content'>
             <form onSubmit = {postData}>

               


                 <input onChange = {handleChange} name = 'Name' type ='text' placeholder = 'who is doing this task' />
                 <input onChange= {handleChange} name = 'startTime' type ='text' placeholder = 'starting time' />
                 <input onChange = {handleChange} name = 'doneTime' type ='text' placeholder = 'finishing time' />
                 <input  onChange ={handleChange} type='text' name = 'title' placeholder = 'What your task' />
                 <textarea onChange= {handleChange} name ='task' type = 'text' placeholder = 'Describe your task'        />
                  <div className = 'button'>
                  
                      <button className = 'button1' onClick = {()=>{
                          setClick(!click)
                      }}>
                        



                         Cancel
                      </button>


                      <button on onSubmit = 'text' className = 'button2'>Add</button>








                  </div>













             </form>















         </div>














      </div> 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      ) : null}</>
          













       
    )
}

export default EntryForm
