const express = require("express")
app = express()
const Task = require("../model/task")

const create_task = async(req,res)=>{

    try{
        const task = await Task.create((req.body))
        res.status(200).json({task})
    }
    catch(error){
        console.log(error);
    }
}

const find_task = async(req,res)=>{
    try{
        const task = await Task.find({})
        const taskdata = task.map(value=>value.toObject() )
        res.status(200).json(taskdata)
    }
    catch(error){
        console.log(error)
    }
}

const findOne_task = async(req , res) =>{
    try {
        const task = await Task.findById(req.params.id)
        // const task_json = task.map(value => value.toObject)
        if(!task){
            return res.status(404).send("no task found")
        }
        res.status(200).json+(task)
    } catch (error) {
        res.status(500).json(error)
    }
}

const delete_task = async(req,res)=>{
    try {
        const task = await Task.deleteOne({_id :req.params.id})
        if(!task){
            // console.log('No such task exists')
            res.status(404).send("No such task exists")
        }
        else{
            res.status(200).json(task)}
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports ={
    create_task, find_task , findOne_task, delete_task
}