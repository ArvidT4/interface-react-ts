import React from 'react';
import { TodoObj } from './App';
type props={
    todo:TodoObj;
}

function Todo(props:props) {
    console.log(props.todo.task);
    let completedEl;
    if(props.todo.completed){
        completedEl=<p>Färdig</p>
    }
    else completedEl=<p>inte färdig</p>
    let element = <div>{props.todo.task}:{completedEl}</div>
    return (
        element
    );
}

export default Todo;