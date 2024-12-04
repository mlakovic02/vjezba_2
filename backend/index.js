const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
