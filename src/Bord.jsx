
import { useState } from "react"

export default function Bord(){

    const winnerArry=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    const [inputs,setInput]=useState(Array(9).fill(''));
    const [player,setPlayers]=useState(true)


    const winner =calculationWinner();
    let status = "";
    if (winner){
        status= "winner is " + (player ? "o":"x");
    }else{
        status= "Next player is " + (player ? "x":"o");
    }


    function calculationWinner(){

        for (let i=0;i < winnerArry.length;i++){
            const [x,y,z]=winnerArry[i];
            if(inputs[x] && inputs[x]===inputs[y] && inputs[x]===inputs[z]){
                return true;
            }
        }
        return null;
    }





    const  handleboxe=(event)=>{
        if (event.target.className.includes('input-box') === false)
            return;
        
        const index = parseInt(event.target.dataset.index);
        if (inputs[index] !== '') 
            return;
        

        const copyedArray=inputs.map((input,index)=>{
            if (index==event.target.dataset.index){
                return player ? "x":"o";
            }
            return input;
        })
        setInput(copyedArray)
        setPlayers(!player)

    }


  
    

    return (
        
        <section onClick={handleboxe} className="grid grid-cols-3 w-[295px]">

            { inputs.map((input,index)=> {
                return(
                <div data-index={index} className="input-box border border-black rounded-md w-24 h-24" key={index}>{input}</div>)})
            }

            <p>{status}</p>
        </section>
        
        
    )

}