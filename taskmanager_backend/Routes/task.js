const express = require("express")
const router = express.Router()
const {create_task ,find_task, findOne_task ,delete_task} = require('../controllers/tasks')

router.route('/tasks')
.get(find_task)
.post(create_task)

router.route('/tasks/:id')
.get(findOne_task)
.delete(delete_task)
.patch((req,res)=>{
    res.send("this is patch req in task")
})
module.exports = router 