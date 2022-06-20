import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const title_1: string = 'What to learn'
    const title_2: string = 'What to buy'

    const task_1: Array<TaskType> = [
        {id: 1, title:'HTML', isDone: true},
        {id: 2, title:'CSS', isDone: true},
        {id: 3, title:'JS/E6', isDone: false},
    ]

    const task_2: Array<TaskType> = [
        {id: 1, title:'Orange', isDone:true},
        {id: 2, title:'Apple', isDone:true},
        {id: 3, title:'Banana', isDone:true},
    ]
    return (
        <div className="App">
            <TodoList title={title_1} tasks={task_1}/>
            <TodoList title={title_2} tasks={task_2}/>

        </div>
    );
}

export default App;
