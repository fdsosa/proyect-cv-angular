const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/dist/my-dream-app'));
app.use(cors());

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/my-dream-app/index.html'));
});

app.get('/index',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/my-dream-app/index.html'));
});

app.get('/repo',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/my-dream-app/index.html'));
});

app.listen(process.env.PORT || 8080);