import './Cart.css'
export default function Cart ({selectedCourse}){
    
    return(
        <div>
            <h2>Course Name</h2>
            {
                selectedCourse.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))
            }
        </div>
    )
}