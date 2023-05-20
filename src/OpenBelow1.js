
// import { createElement } from 'react';
import vector from './images/Vector.png';
// function img(){
//     return(
//     <>
// <button id="b1" onClick={task1}><img id="i1" src={vector} className="vectorimage" alt="vectorimage"/></button>
// </>)
// }
export default function OpenBelow1()
{  
    const task1 = () =>{
        
        setTimeout(() => {
           let  e1=document.getElementById('ih1')
           e1.innerText="How much would it require to open an account ?"
           e1.style.fontSize="3vw"
          
          
        }, 2000);
        document.getElementById('ih1').innerText="It is as cheap as from 500 to 50000";

    } 
    
    
    return(
        <>
          <button id="b1" onClick={task1}><img id="i1" src={vector} className="vectorimage" alt="vectorimage"/></button>
         </>
        
    )
}


