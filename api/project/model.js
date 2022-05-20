// build your `Project` model here
const db = require('../../data/dbConfig')


function find() {
    return db('projects')
}

function findById(id) {
    return db('projects').where('project_id', id).first()
}

function create(project) {
    return db('projects').insert(project).then(([id]) => {
        return db('projects').where('project_id', id).first()
    })
}

module.exports = {
    find,
    findById,
    create
}
