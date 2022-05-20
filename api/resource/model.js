// build your `Resource` model here')
const db = require('../../data/dbConfig')

function find() {
    return db('resources')
}
function getByName(name) {
    return db('resources').where({resource_name: name}).first()
}
function create(resource) {
    return db('resources').insert(resource).then(([id]) => {
        return db('resources').where('resource_id', id).first()
    })
}

module.exports = {
    find,
    getByName,
    create,
}