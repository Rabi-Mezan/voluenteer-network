import React from 'react';
import './Body.css'

const Body = () => {
    return (
        <div className='mt-5'>
            <h3 className='fw-bold'>I GROW BY HELPING PEOPLE IN NEED</h3>
            <div class="input-group mt-3 mb-3 w-25 m-auto search">
                <input type="text" class="form-control" placeholder="search..." aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">Search</span>
            </div>


        </div>
    );
};

export default Body;