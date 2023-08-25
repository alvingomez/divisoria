import express from 'express';

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('<h1>This is a test broadcast</h1>')
})

app.listen(port, () => console.log(`Server is listening on port ${port}`));