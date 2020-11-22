
import React, {useState,useEffect} from 'react'
import axios from '../axios'
import './style.css'

function ViewingTask() {
 const [form, setForm] = useState([])

 



 const getData = async ()=>{
     const newData = await axios.get('/')
     console.log(newData)
     if (newData .data){
         return setForm(newData.data)
     }
 }

const deletepost = async (_id)=>{
    const delecting = await axios.delete(`/${_id}`, form )
    if (delecting.data) {
        return getData()
    }
}


const patchpost = async (_id)=>{
    const editing = await axios.patch(`/${_id}`, form )
    if (editing.data) {
        return getData()
    }
}







useEffect( ()=>{
    getData ()
}, [])





    return (
        <div className = 'todo'>
           
         
           <div className ='valid'>
               {form.map((post)=>(
                 <div className = 'me'>
                   <div className = 'post'>{post.Name}</div>
                   <div className ='start'>{post.startTime}</div>
                   <div className ='done'>{post.doneTime}</div>
                   <div className = 'title'>{post.title}</div>
                   <div className = 'task'>{post.task}</div>
                   <button onClick ={(_id)=>{
                     patchpost(post._id);
                    }} >Edit</button>
                 <button onClick ={(_id)=>{
                     deletepost(post._id);





                }} >Delete</button>





                 </div>
              


                ))}




           </div>



        </div>
    )
}

export default ViewingTask
