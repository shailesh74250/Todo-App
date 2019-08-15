import React from 'react';

const Todos = ({todos, deleteTodos}) => {
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=> {deleteTodos(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (<p className="center">No Todos Found!</p>)
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
} 

export default Todos;