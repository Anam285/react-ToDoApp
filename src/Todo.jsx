

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
            <input  type="checkbox"
            checked = {props.check}
            onChange= {handleChange}/>
            
            <button  className="btn " ><i className="fa fa-trash para2" onClick={handleDel}></i></button>

        </label></li>
        </ul>
        </>
    )

}


export default Todo