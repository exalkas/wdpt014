import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function Todo(props) {

    const {todos, dispatch} = useContext(TodoContext)
    
    const [todo, setTodo] = useState('')
    
    
    console.log("🚀 ~ todos:", todos)
    return (
        <div>
           <input 
            placeholder="type your task"
            value={todo} 
            onChange={e => setTodo(e.target.value)}/>
           <button onClick={() => dispatch({type: 'ADD', payload: {todo, completed: false}})}>add todo</button>
           <br />
           {
            todos.map((item, idx) => <div key={idx}>
                {item.todo}
                completed: {item.completed ? 'done' : 'not done'}
                <button onClick={() => dispatch({type: 'DELETE', payload: idx })}>delete task</button>
                <button onClick={() => dispatch({type: 'TOGGLE', payload: idx })}>
                    {item.completed ? 'Undo' : 'Complete task'}
                </button>            </div>)
           }
        </div>
    );
}

export default Todo;