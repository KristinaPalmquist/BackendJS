const { getAllTitles, addTitle } = require('../repositories/titleRepository')

async function get(req, res) {
    let titles = await getAllTitles()
    return res.json(titles)
}

async function add(req, res) {
    addTitle(req.body.postedTitle)
}

module.exports = {
    get,
    add
}
