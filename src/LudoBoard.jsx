import { useState } from "react";
export default function LudoBoard(){
    let [moves,setMoves] =  useState({blue:0,yellow:0,green:0,red:0});

    let updateBlue = () =>{
        setMoves((prevMoves)=>{
           return {...prevMoves, blue:prevMoves.blue += 1};
        });
    }

    let updateYellow = () =>{
        setMoves((prevMoves)=>{
           return {...prevMoves, yellow:prevMoves.yellow += 1};
        });
    }
    return (
        <div>
            <h3>Ludo Game !</h3>
            <div className="Box">
                <p>Blue moves:{moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves:{moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves:</p>
                <button style={{backgroundColor:"green"}}>+1</button>
                <p>red moves:</p>
                <button style={{backgroundColor:"red"}}>+1</button>

            </div>

        </div>
    );
}