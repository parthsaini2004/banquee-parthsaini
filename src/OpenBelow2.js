import vector from './images/Vector.png';
export default function OpenBelow2()
{  
   
    const task2 = () =>{

        setTimeout(() => {
            let  e1=document.getElementById('ih2')
            e1.innerText="How much would it require to open an account ?"
            e1.style.fontSize="3vw"
           
           
         }, 2000);
        document.getElementById('ih2').innerText="THERE IS NO OPERATIONAL COST AT ALL";
    } 
    return(
        <>
    <button id="b2" onClick={task2}><img id="i2" src={vector} className="vectorimage" alt="vectorimage"/></button>
    </>
    )
}