import express from 'express';

const app = express();

export default function(app) {
    app.get('/', (req, res) => {
        res.send('Server is running');
    });
}
