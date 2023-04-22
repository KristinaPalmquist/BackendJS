const pgpromise = require('pg-promise')
const database = pgpromise(
    'postgres://postgres:Hipp0Hast74.@localhost:5432/Labb3-Library'
)

async function selectAllTitles() {
    let titles = await database.many('SELECT * FROM title')
    return titles
}

async function insertTitle() {
    let result = await database
        .none(
            `INSERT INTO title(title_book, publ_year, author_id) VALUES('${title.book}', ${publ_year}, ${author_id})`
        )
        .catch((error) => {
            console.log('Logged error: ', error)
        })
    return result
}

module.exports = {
    selectAllTitles,
    insertTitle
}
