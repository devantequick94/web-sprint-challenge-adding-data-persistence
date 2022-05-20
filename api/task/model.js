// build your `Task` model here
const db = require('../../data/dbConfig')

function find() {
    return db('tasks').leftJoin('projects', 'projects.project_id', 'tasks.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
}


function create(task) {
    return db('tasks').insert(task).then(([id]) => {
        return db('tasks').where('task_id', id).first()
    })
}

module.exports = {
    find,
    create
}