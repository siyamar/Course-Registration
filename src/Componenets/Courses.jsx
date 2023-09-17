/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './Courses.css'
import { useEffect } from 'react';
import Cart from './Cart/Cart';
const Courses= ()=> {

    const[courses, setCourses] = useState([]);
    const[selectedCourse, setSelectedCourse] = useState([])
    const [remainingCredit, setRemainingCredit] = useState(20)
    const[usesCredit, setUsesCredit] = useState(0)

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    }, [])

    const handleSelectedCourse = (course) => {
        const isExist = selectedCourse.find((item) =>
            item.id ==course.id);
            let count =course.credit;
        if(isExist){
            return alert('This Course Already Selected !!!');
        }
        else{

            // setSelectedCourse.forEach(item=> {  
            //     count=count+item.credit
            // });
            const totalRremaining = 20-count
            setSelectedCourse([...selectedCourse, course])
        }
    };
  
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
                    <h2>{course.name}</h2>
                    <p><small>{course.details}</small></p>
                    <div className='info'>
                        <p>$</p>
                        <p>Price: {course.price}</p>
                        <img src="./Asset/Frame.png" alt="" />
                        <p>Credit: {course.credit} hr</p>
                    </div>
                    <button onClick={()=>handleSelectedCourse(course)} className='card-btn'>Select</button>
                </div>
                    ))
                }
            </div>
            <div className='cart'>
               <Cart selectedCourse={selectedCourse}></Cart>
               <hr />
               <h4>Total Credit Hour :</h4>
            </div>
            </div>
        </div>
      </div>
    )
  }


export default Courses;