import React from 'react'
import Student from './Student';

function College({college}) {
  return (
    <div>
        <h1>Name: {college.collegeName}</h1>
              <ul>
                <li>
                  <h4>city: {college.city}</h4>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>Website: {college.website}</h4>
                </li>
                
                <Student student={college}/>
                
              </ul>
              
            
    </div>
  )
}

export default College;