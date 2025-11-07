import { useId } from "react"


function UseIdHook() {
   
  return (
    <div>
        {/* <h1>UseId Hook</h1>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{skills}</h3>
        <h3>{terms}</h3> */}
        <UserForm/>
        <UserForm/>
        

       
           </div>
  )
}

export default UseIdHook


    function UserForm() {
    const name = useId();
    const password = useId();
    const skills = useId();
    const terms = useId();
            return(
                <div>
            <form action="">
            <label htmlFor={name}>Enter a User Name: </label>
            <input id={name} type="text" placeholder="enter a user name" />
            <br /><br />
            <label htmlFor={password}>Enter a User Password: </label>
            <input id={password} type="text" placeholder="enter a user Password " />
            <br /><br />
            <label htmlFor={skills}>Enter a User Skills: </label>
            <input id={skills} type="text" placeholder="enter a user skills" />
            <br /><br />
            <label htmlFor={terms}> Terms and conditions </label>
            <input id={terms} type="checkbox" placeholder="enter a user skills" />
            <br /><br />
        </form>
                     

                </div>
            )
            
        }

 