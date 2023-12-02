function submitRequest() {
    const songName = document.getElementById('songName').value;
    const artist = document.getElementById('artist').value;
    const comment = document.getElementById('comment').value;

    fetch('http://localhost:3000/submit-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ songName, artist, comment }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Liedverzoek succesvol ingediend!');
            document.getElementById('songName').value = '';
            document.getElementById('artist').value = '';
            document.getElementById('comment').value = '';
            getRequests(); // update de requests
        } else {
            console.error('Liedverzoek indienen mislukt.');
        }
    })
    .catch(error => console.error('Fout:', error));
}

function getRequests() {
    fetch('http://localhost:3000/get-requests') // endpoint, moet nog worden veranderd als we netlify willen gebruiken
        .then(response => response.json())
        .then(data => {
            const requestsList = document.getElementById('requestsList');
            requestsList.innerHTML = '';

            data.forEach(request => {
                const listItem = document.createElement('li');
                listItem.className = 'request-item';
                listItem.innerHTML = `<strong>${request.songName}</strong> by ${request.artist}`;
                
                if (request.comment) {
                    listItem.innerHTML += `<br>Comment: ${request.comment}`;
                }

                requestsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching requests:', error));
}

document.addEventListener('DOMContentLoaded', getRequests);
