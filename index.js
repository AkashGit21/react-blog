const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox-vihxr.mongodb.net/<dbname>?retryWrites=true&w=majority',
        {useNewUrlParser:true, useUnifiedTopology:true}).then(()=> console.log('DB connected!'))
        .catch(err => console.error(err));

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(5000);