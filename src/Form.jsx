
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
            <button type="submit" onclick={handleSubmit}>Add</button>
        </form>
    )
}














export default Form;