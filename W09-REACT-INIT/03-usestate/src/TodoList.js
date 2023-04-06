import { useState } from "react";

function TodoList(props) {

    const [item, setItem] = useState('')
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
        console.log("🚀 ~ handleAdd:")
        
        // todos.push(item)
        console.log("🚀 ~ todos:", todos)

        // setTodos([...todos, item])
        const oldTodos = todos
        oldTodos.push(item)

        setTodos([...oldTodos])
    }
    return (
        <div>
            <input 
                value={item} 
                onChange={e => setItem(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            {
                todos.map((item, idx) => <div key={idx}>{item}</div>)
            }
        </div>
    );
}

export default TodoList;