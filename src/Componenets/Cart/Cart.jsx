/* eslint-disable react/prop-types */
import './Cart.css'
export default function Cart ({selectedCourse, usesCredit, remainingCredit}){
    
    return(
        <div>
            
            <h5>Credit Hour Remaining {remainingCredit} hr</h5>
            <hr />
            <h2>Course Name</h2>
            {
                selectedCourse.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))
            }
            <hr />
            <h5>Total Credit Hour : {usesCredit}</h5>
        </div>
    )
}