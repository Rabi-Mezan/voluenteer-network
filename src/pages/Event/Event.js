import React from 'react';
import './Event.css'


const Event = (props) => {
    const { title, img } = props.e;

    return (
        <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body d-flex text-center">
                <p class="card-text">{title}</p>
            </div>
        </div>
    );
};

export default Event;