
import vector from './images/Vector.png';
export default function OpenBelow4()
{  
    const task4 = () =>{
        setTimeout(() => {
            let  e1=document.getElementById('ih4')
            e1.innerText="how much do i get as interest on savings ?"
            e1.style.fontSize="3vw"
           
           
         }, 2000);
        document.getElementById('ih4').innerText="it is high rates from 7 to 12%";
    } 
    
    
    return(
        <>
          <button id="b4" onClick={task4}><img id="i1" src={vector} className="vectorimage" alt="vectorimage"/></button>
         </>
        
    )
}


