/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './Courses.css'
import { useEffect } from 'react';
const Courses= ()=> {

    const[courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    }, [])

    
  
    return (
      <div>
        <h2>Course Registration</h2>
        <div className="container">
            <div className="home-container">
            <div className="card-container">
                {
                    courses.map(course=>(
                        <div key={course.id} className="card">
                    <img className='photo' src={course.image} alt="" />
                    <h2>Introduction to C Programming</h2>
                    <p><small>{course.details}</small></p>
                    <div className='info'>
                        <p>$</p>
                        <p>Price: {course.price}</p>
                        <img src="./Asset/Frame.png" alt="" />
                        <p>Credit: {course.credit} hr</p>
                    </div>
                    <button className='card-btn'>Select</button>
                </div>
                    ))
                }
            </div>
            <div className='cart'>
                <h1>This is cart</h1>
            </div>
            </div>
        </div>
      </div>
    )
  }


export default Courses;