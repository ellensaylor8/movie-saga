const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies" JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id JOIN "genres" ON "movies_genres".genre_id = "genres".id';
        pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500)
        });
});

router.put('/', (req, res) => {
    const updatedMovie = req.body;
console.log('movie title: ', updatedMovie.title)
    const queryText = `UPDATE "movies"
    SET "title" = $2, 
    "description" = $3
    WHERE "id"=$1;`;

    const queryValues = [
        updatedMovie.id,
        updatedMovie.title,
        updatedMovie.description,
    ];

    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing update movie query', err);
            res.sendStatus(500);
        });
});

module.exports = router;