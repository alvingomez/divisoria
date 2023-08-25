import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>This is a test broadcast</h1>')
})



app.listen(port, () => console.log(`Server is listening on port ${port}`));