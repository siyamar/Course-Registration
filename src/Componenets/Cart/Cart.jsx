/* eslint-disable react/prop-types */
import './Cart.css'
export default function Cart ({selectedCourse, usesCredit, remainingCredit}){
    
    return(
        <div className='cart-container'>
            
            <h4>Credit Hour Remaining {remainingCredit} hr</h4>
            <hr />
            <h2>Course Name</h2>
            {
                selectedCourse.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))
            }
            <hr />
            <p>Total Credit Hour : {usesCredit}</p>
        </div>
    )
}