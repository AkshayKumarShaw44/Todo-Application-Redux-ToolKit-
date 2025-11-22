import React, { useState } from 'react'
import { addTodo } from '../features/Todo/todoSlice';
import { useDispatch } from 'react-redux'


function TodoForm() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        dispatch(addTodo({todo:input}));
        setInput('');
    }
    return (
        <form  className="flex" onSubmit={addTodoHandler}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;




