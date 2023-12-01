const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // Import the 'path' module
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for handling song requests
app.post('/submit-request', (req, res) => {
    const { songName, artist } = req.body;

    // Log the song request
    console.log(`Song Request: ${songName} by ${artist}`);

    res.status(200).send('Song request submitted successfully');
});

// Define a route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
