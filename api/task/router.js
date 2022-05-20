// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()
const {checkValid, checkId} = require('./middleware')

router.get('/',  async (req, res) => {
    const tasks = await Task.find()
    const switchBool = tasks.map(task => {
        return {...task, task_completed: task.task_completed ? true : false}
    })
    res.json(switchBool)
})

router.post('/', checkValid, checkId, async (req, res) => {
    const newTask = await Task.create(req.body)
    res.status(200).json({...newTask, task_completed: newTask.task_completed ? true : false})

})

module.exports = router