import React, { useEffect, useState } from 'react';
import Event from '../../Event/Event';
import './Body.css'

const Body = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className='mt-5'>
            <h3 className='fw-bold'>I GROW BY HELPING PEOPLE IN NEED</h3>
            <div class="input-group mt-3 mb-3 w-25 m-auto search">
                <input type="text" class="form-control" placeholder="search..." aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">Search</span>

            </div>
            <div className='events p-5'>
                {
                    events.map(e => <Event
                        key={e._id}
                        e={e}
                    >

                    </Event>)
                }
            </div>

        </div>
    );
};

export default Body;