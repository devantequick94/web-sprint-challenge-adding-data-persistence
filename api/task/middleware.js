const Project = require('../project/model')

const checkValid = (req, res, next) => {
    const {task_description, project_id} = req.body
    if(!task_description || !project_id) {
        res.status(400).json({message: 'Task description and project name are both required'})
    } else {
        next()
    }
}

const checkId = async (req, res, next) => {
    const {project_id} = req.body
    const project = await Project.findById(project_id)
    if(!project) {
        res.status(400).json({message: `Project ${project_id} could not be found`})
    } else {
        next()
    }
}

module.exports = {
    checkId,
    checkValid
}