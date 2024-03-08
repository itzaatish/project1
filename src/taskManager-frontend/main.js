import React from "react";
import Task from "./taskTemplate.js"
import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:5000';

export default function Main(){

    const [formData , setformData] = React.useState({
        "name":"",
        "completed": false,
        "id":""
    })
    const [status , setstatus] = React.useState(true)
    console.log(status);
    const [serverData , setServerData ] = React.useState([])
    React.useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tasks'); // Use relative path
                const data = response.data;
                // console.log(data);
                setServerData(data);
                // Handle the data received from the server here
            } catch (error) {
                console.error('Error:', error.message);
                if (error.response) {
                console.error('HTTP error! Status:', error.response.status);
                console.error('Response data is :', error.response.data);
                } else if (error.request) {
                console.error('No response received. Request details:', error.request);
                } else {
                console.error('Request setup error:', error.message);
                }
            }
            };
            fetchData();
    },[status])

    const deleteTask = async(id)=>{
        console.log("delete hit")
        try {
            const deleteit = await axios.delete(`http://localhost:5000/tasks/${id}`)
            console.log('I was in try block')
        } catch (error) {
            console.log(error)
        }
        setstatus((data)=>{
            const newData = !data;
            return newData;
        })
    }

    const taskData =serverData
    const Cards = taskData.map(data=>{
        return <Task 
            work = {data.name}
            success = {data.completed}
            id = {data._id}
            toogle ={()=>{deleteTask(data._id)}}/>
    })
    
    console.log(serverData);

    const toggle = (event)=>{
        const {type , name , value , checked} = event.target
        setformData((data)=>{
            return ({...data , [name]:type === "checkbox" ? checked : value})
        })
    }



    const taskSave = async (event) => {
        // console.log("I am running");
        event.preventDefault();
        const TaskOutput = (formData);
        
        try {
            const posting = await axios.post('http://localhost:5000/tasks', TaskOutput);
            console.log('Task saved successfully:', posting.data);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server responded with an error status:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received. Request details:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Request setup error:', error.message);
            }
        }
        setstatus((data)=>{
            const newData = !data ;
            return newData;
        });
    };
    

    return(
        <div id="main-container">
            <div id="form-holder">
            <div id="text-boxholder" ><input type="text" placeholder="Enter Task" name="name" onChange={toggle} value={formData.name} id="input-box"></input></div>
            <div id="checkbox-container"><input type="checkbox" name="completed" onChange ={toggle} checked ={formData.completed}></input><xpan>Task Completed</xpan> </div>
            <button id="button" onClick={taskSave} className="btn btn-primary btn-lg">SUBMIT</button>
            </div>
            {Cards}
        </div>
    )
}