import React from 'react';
import { useForm } from "react-hook-form";
import './AddEvents.css'
import logo from '../../resources/logos/Group 1329.png'



const AddEvents = () => {
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/events', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged == true) {
                    alert('events added successfully')
                    reset();
                }
            })
    }

    return (
        <div className='add-event mt-5'>
            <div className='d-flex flex-column justify-content-center  align-items-start ms-3'>
                <img className='w-50' src={logo} alt="" />
                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <p>  <i class="fas fa-user-friends me-2"></i>Volunteer register list</p>
                </div>
                <p className='text-info'>+ Add Event</p>

            </div>
            <div>

                <div className='add-event-form '>
                    <h3 className='text-start ms-4 fw-bold'>Add Events</h3>
                    <form className='main-form pb-3' onSubmit={handleSubmit(onSubmit)}>

                        <div className='d-flex inputs pt-5'>
                            <div className='d-flex flex-column'>
                                <input className='input-field'  {...register("title")} placeholder='event title' />
                                <input className='text-area'  {...register("description")} placeholder='description' />
                            </div>
                            <div className='d-flex flex-column'>
                                <input className='input-field' placeholder='event date' type="date" {...register("date")} />
                                <input className='input-field' placeholder='image url' {...register("img")} />
                            </div>
                        </div>

                    </form>
                    <input className='btn-submit' type="submit" />
                </div>
            </div>
        </div>
    );
};

export default AddEvents;