import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({todos, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    })

    const handleEdit = value => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={handleEdit} />
    }

    const handleOnClick = todo => (
        completeTodo(todo.id)
    )

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
            <div key={todo.id} onClick={handleOnClick}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
                />
                <TiEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className="edit-icon"
                />
            </div>
        </div>

    ))
}

export default Todo
