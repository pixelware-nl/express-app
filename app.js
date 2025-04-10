const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).send('Application is running.');
});

app.get('/api/users', (request, response) => {
    response.status(404).send('Sorry! No users found.');
});

app.post('/api/users', (request, response) => {
    response.status(201).send({
        message: `User ${request.body.email} created successfully!`,
        data: request.body,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Simple application created by Okan Ozbek ❤️`);
});