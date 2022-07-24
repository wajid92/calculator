import React from "react";

const OutputRow = (props) =>{
    return (
        <>
        <div >
            <input className="outputRow" type="text" readOnly value = {props.value}/>
        </div>
        </>
    )
}

export default OutputRow;