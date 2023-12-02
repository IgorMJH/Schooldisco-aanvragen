const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-request', (req, res) => {
    const { songName, artist, comment } = req.body;

    
    console.log(`Song Request: ${songName} by ${artist} extra comment: ${comment}`);

    res.status(200).send('Song request submitted successfully');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// port wordt gegeven en aangewezen door Netlify
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
