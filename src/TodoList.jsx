
import Todo from './Todo'


const TodoList=(props)=>{

    return(
        props.todos.map((item,index)=>{
            return(
            
                <Todo todo={item.value}
                id = {index}
                key={index}
                check ={item.complete}
                toggle={props.toggle}
                del= {props.delete} />

            )

        }))
        }
    

export default TodoList;