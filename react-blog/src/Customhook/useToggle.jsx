import { useState } from "react";

const useToggle=(defaultValu)=>{
    const [value,setValue]=useState(defaultValu);
    function toggleValue(val){
        if(typeof val!='boolean'){
            setValue(!value)
        }else{
            setValue(val)
        }
    }
    return [value,toggleValue ]
}

export default useToggle;