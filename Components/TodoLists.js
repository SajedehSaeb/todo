import React from 'react';
import './TodoLists.css';


import {IoTrashOutline , IoCheckmarkCircleOutline } from 'react-icons/io5';
import {HiOutlinePencil} from 'react-icons/hi';

const TodoLists = ({todos , setTodos , setEdit }) => {

    const completeHandler = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {...item , complete : !item.complete }
            }
            return item ;
        }))
    }

    const editHandler = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
    }

    const deleteHandler = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div>
            {todos.map((todo) => (
                <div className="w-25 m-2">
                    <div
                        key={todo.id} 
                        className="bg-white d-flex justify-content-between align-items-center border rounded p-3">
                        <div>
                            <input value={todo.title} className={`border-0 ${todo.complete ? "complete" : ""}`}/>
                        </div>
                        <div>
                            <IoCheckmarkCircleOutline 
                                color='green' 
                                size={'1.5rem'} 
                                style={{marginRight : '10px'}}
                                className={todo.complete ? "complete" : ""}
                                onClick={() => completeHandler(todo)}
                            />   
                            <HiOutlinePencil 
                                color='blue' 
                                size={'1.5rem'} 
                                style={{marginRight : '10px'}}
                                onClick={() => editHandler(todo)}
                            />  
                            <IoTrashOutline 
                                color='red' 
                                size={'1.5rem'}
                                onClick={() => deleteHandler(todo)} 
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoLists;