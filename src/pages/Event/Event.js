import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css'


const Event = (props) => {
    const { title, img } = props.e;

    return (
        <Link to='/regAsVolenteer'>
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body d-flex text-center">
                    <p class="card-text">{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default Event;