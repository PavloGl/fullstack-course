import React from 'react'
import Course from './Course'

const Courses = ({ courses }) => {
  const listOfCourses = () => courses.map(course =>
    {
      console.log(course)
      return <Course key={course.id}
      course={course} />
    }

  )

  return (
    <ul>
      {listOfCourses()}
    </ul>
  )
}

export default Courses