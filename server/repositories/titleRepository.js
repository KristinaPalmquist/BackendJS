const titleModel = require('../models/titleModel')
const db_context = require('../../db_context')

async function getAllTitles() {
    let titles = []
    let data = await db_context.selectAllTitles()
    data.forEach((title) => {
        titles.push(new titleModel(title.title))
    })
    return titles
}

async function addTitle(title) {
    db_context.insertTitle(title, )
}

module.exports = {
    getAllTitles,
    addTitle
}
