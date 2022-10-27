import React from 'react';
import bg from '../image/bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Background = () => {
    return (
        <div className='position-relative'>
            <div className='position-absolute end-0 w-50 h-100' style={{marginTop : '10%'}}>
                <img src={bg} alt='bg' className='w-100 '/>
            </div>
        </div>
    );
};

export default Background;