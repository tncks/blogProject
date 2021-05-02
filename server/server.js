const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(`Welcome to Suchan's blog`);
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})