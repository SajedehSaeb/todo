import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoLists from './TodoLists';
import Background from './Background';
import 'bootstrap/dist/css/bootstrap.css';
import './Background.css';



const Todo = () => {

    const [input , setInput] = useState("");
    const [todos , setTodos] = useState([]);

    return (
        <div>
            <div className='w-100 position-absolute d-flex align-item-center justify-content-center mt-5 mb-5'>
                <div>                
                    <AddTodo 
                        input = {input}
                        setInput = {setInput}
                        todos = {todos}
                        setTodos = {setTodos}
                    />
                </div>
                <div className='w-100' style={{marginTop : '7%' , marginLeft : '13.5%'}}>
                    <TodoLists 
                        todos = {todos} 
                        setTodos = {setTodos}
                    />
                </div>
            </div>
            <div>
                <Background />
            </div>          
        </div>

    );
};

export default Todo;