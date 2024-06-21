import React, { useState } from 'react'

const Todo = () => {
    const [state, setState] = useState('')
    const [todo, setTodo] = useState([])

    const handleClick = () => {
        setTodo([...todo, state])
        setState("")
    }
    const handleChange = (e) => {
        setState(e.target.value)
    }

    const handleDelete=(index )=>{
      const dlt = [...todo]
      dlt.splice(index,1)
      setTodo(dlt)
    }

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Text Here"
                    value={state}
                    onChange={handleChange}
                    className="flex-grow border border-gray-300 p-2 rounded mr-2"
                />
                <button
                    onClick={handleClick}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add
                </button>
            </div>
            <div className="space-y-2">
                {todo.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded shadow-md flex justify-between items-center"
                    >
                        <h2 className="text-lg font-semibold break-words flex-grow overflow-hidden ...">{index + 1} . {item}</h2>
                        <button onClick={()=>handleDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Delete
                        </button>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Todo
