import React from 'react'
import College from './College';

function Student({student}) {
  return (
    <div>
        <h1>Student Component</h1>
        {
                 
                  student.student.map((student)=>(
                    <div>
                      <ul>
                        <li><h4>{student.name}</h4></li>
                      </ul>
                    </div>
                  ))
                }
       
    </div>
  )
}

export default Student;