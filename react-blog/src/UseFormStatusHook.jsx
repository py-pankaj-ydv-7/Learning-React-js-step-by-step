import {useFormStatus} from 'react-dom'

function UseFormStatusHook() {
    const handleSubmit=async()=>{
      await  new Promise(res=>setTimeout(res,5000));
        console.log("submit");
    }
    function CustomerForm(){
        const {pending} = useFormStatus();
        console.log(pending);
        
        return(
            <div>
       

        <input type="text" placeholder="enter name" /> <br /><br />
        <input type="password" placeholder="enter password" />
        <br /><br />
        <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>

        
            </div>
        )
    }
  return (
    <div>
        <h1>UseFormStatus Hook React.js 19</h1>
         <form action={handleSubmit}>
        <CustomerForm/>
        </form>
    </div>
  )
}

export default UseFormStatusHook