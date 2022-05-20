// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()
const { checkName } = require('./middleware')


router.get('/', async (req, res) => {
    const projects = await Project.find()
    const switchBool = projects.map(project => {
        return {...project, project_completed: project.project_completed ? true : false}
    })
    res.json(switchBool)
})

router.post('/', checkName,  async (req, res) => {
    const newProject = await Project.create(req.body)
    res.status(201).json({...newProject, project_completed: newProject.project_completed ? true : false})
})


module.exports = router