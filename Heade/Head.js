import React, {useState} from 'react'
import EntryForm from '../EntryForm/EntryForm'
import './style.css'

function Head() {
    const [click, setClick] = useState(false)

    const clickEffect = ()=>{
        setClick((prev) => (!prev))
    }


    return (
        <div className = 'container'>
            <div className = 'header'>Our Todo-Task App

            </div>
            <div className = 'btn' onClick = {clickEffect}> +</div>

          <EntryForm click = {click} setClick = {setClick}/>
              
        </div>
    )
}

export default Head
