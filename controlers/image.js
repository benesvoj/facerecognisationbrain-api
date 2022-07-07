const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'c4fe8b7d34bc4be6afb5d20ba9bde35f'
});

const handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('Unable to work with API'))
}


const handleImageGet = (req, res, db) => {
    const {id} = req.body;

    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0].entries);
        })
        .catch(err => res.status(400).json('error getting entries'));
}


module.exports = {
    handleImageGet,
    handleApiCall
}