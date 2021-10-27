import {MdDeleteForever} from 'react-icons/md';


const Todo =(props)=>{

    const handleChange =()=>{
        props.toggle(props.id)

    }
    
    const handleDel =()=>{
        props.del(props.id)

    }




    return (
        <>
        <ul>
        <li className="list-group">
        <label className="todo">
            <p className="para">{props.todo}</p>
            <input  type="checkbox" className="checkbox"
            checked = {props.check}
            onChange= {handleChange}/>
            
            <MdDeleteForever size={30} style={{color:'red'}} onClick={handleDel}/>

        </label></li>
        </ul>
        </>
    )

}


export default Todo