import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleOnChange = e => {
        setInput(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleOnSubmit}>
            <input 
            type="text"
            placeholder="Add New Todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleOnChange}
            ref={inputRef}
        />
        <button className="todo-button">Add Todo</button>
        </form>
    )
}

export default TodoForm
