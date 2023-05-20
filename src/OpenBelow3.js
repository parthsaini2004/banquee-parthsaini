import vector from './images/Vector.png';
export default function OpenBelow3()
{  
    const task3 = () =>{
        setTimeout(() => {
            let  e1=document.getElementById('ih3')
            e1.innerText="where can i use my debit cards ? "
            e1.style.fontSize="3vw"
           
           
         }, 2000);
        document.getElementById('ih3').innerText="anywhere you want ";
    } 
    
    
    return(
        <>
          <button id="b3" onClick={task3}><img id="i3" src={vector} className="vectorimage" alt="vectorimage"/></button>
         </>
        
    )
}