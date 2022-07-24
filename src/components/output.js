import React from "react";
import OutputRow from "./outputRow";

const Output =(props)=>{
    return(
        <>
        <div className="output">
            <OutputRow value = {props.question}/>
            <OutputRow value = {props.answer}/>
        </div>
        </>
    )
}

export default Output;