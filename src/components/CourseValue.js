import React from 'react'
import { useSelector } from 'react-redux'


function CourseValue() {
  const totalCost = useSelector(({ form, courses: {data, searchTerm} }) => {
    return data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).reduce((acc,course)=>acc+course.cost,0);
    // let cost=0;
    // for(let course of filteredCourses){
    //   cost +=course.cost;
    // }
    // return cost;
  });
  return (
    <div className='coursePrice'>Total amount: {totalCost} TL</div>
  )
}

export default CourseValue