import {MdAddBox } from 'react-icons/md';

import {useState} from "react"
const Form =(props)=>{

    const [userInput, setUserInput] = useState("")
    // console.log(userInput)
    const handleSubmit =(e)=>{
        e.preventDefault();
       
        props.handleForm(userInput)
        setUserInput("")

        

    }

    return(
        <form className= "forms" onSubmit={handleSubmit}>
            <input className= "textbox" type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
            <MdAddBox type="submit" size = {60} onClick={handleSubmit}/>
        </form>
    )
}














export default Form;