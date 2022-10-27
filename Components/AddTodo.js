import React from 'react';
import { v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTodo = ({input , setInput , todos , setTodos }) => {


    const changeHandler = (event) => {
        setInput(event.target.value);
        console.log(input);
    }

    const submitHandler = (event) => {
        event.preventDefault();
            setTodos([...todos,{
                id : uuidv4(), 
                title : input,
                complete : false
            }])
            setInput("");
       
    }

    return (
        <div>
            
            <form onSubmit={submitHandler} className='w-50 position-absolute d-flex align-item-center justify-content-center mt-5'>
                <input
                    className='p-2 rounded border'
                    type='text'
                    placeholder='add todo ...'
                    value={input}
                    onChange={changeHandler}
                />
                <button type='submit' className='btn btn-success ps-3 pe-3  mb-1 ms-2'>add</button>
            </form>
    
        </div>
    );
};

export default AddTodo;