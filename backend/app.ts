const express = require('express');
const carsRouter = require('./routes/carRouter');
const fs = require('fs');

let app = express();

app.use(express.json());

app.use('/api/cars', carsRouter);

app.listen(3000, ()=>{
    console.log("Server started on port 3000!");
});