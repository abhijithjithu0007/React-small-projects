import React, { useState } from 'react'

const Todo = () => {
    te
    const [state, setState] = useState('')
    const [todo, setTodo] = useState([])

    const handleClick = () => {
        setTodo([...todo, state])
        setState("")
    }
    const handleChange = (e) => {
        setState(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder='Text Here' value={state} onChange={handleChange} />
                <button onClick={handleClick}>click</button>
                
            </div>
            <div>
                {todo.map(item => {
                    <div key={item}>
                    <h2>{item}</h2>
                    </div>
                })}
                <button>,hjvjh</button>
            </div>
        </div>
    )
}

export default Todo
