import React from "react";

export default function Task(props){
    
    let taskCall = "NO";
    if(props.success){
        taskCall = "YES"
    }


    return (<div id="task-container">
        
        <div style={{'margin':15}}>
            <span id="work-discription">{props.work}</span>
            {/* <span>completed :{taskCall}</span> */}
        </div>
        <div id="templateButton-container"><button onClick={()=>props.toogle(props.id)} className="button btn btn-danger" >delete</button>
        <button className="button btn btn-warning" >edit</button>
        </div>
    </div>)
}