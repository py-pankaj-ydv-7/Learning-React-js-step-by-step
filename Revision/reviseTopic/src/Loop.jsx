import React from 'react'

function Loopp() {
    let arr = [
        {id:1,name:"pankaj",age:24,email:"1@124"},
        {id:2,name:"shubham",age:22,email:"1@122"},
        {id:2,name:"Swati",age:22,email:"1@133"},
    
    ];
  return (
    <div>
    <h1>loop in jsx with map function </h1>
    {/* {arr.map((item,index,val)=>{
        return(   // basic syntax .......
            item
        )
    })} */}
    <table border="1px">
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>email</td>
            </tr>
        </thead>
        <tbody>
            
            {
            arr.map((item) => (
                   <tr key={item.id}>
                
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                   </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Loopp