const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
// ./node_modules/.bin/web-push generate-vapid-keys   

app.use(express.static(path.join(__dirname, 'client')))

app.use(bodyParser.json());

const publicVapidKey = 'BGHlX34IJwgTUj-3NihhlRYFnFBmDsZ3wZ8efRAqdyELINiHxOtdv-3IC4cn4Ck4OENJJ2Ldy6q0HYzhWR2ERLo';
const pivateVapidKey = 'BEZPIlsOHCagp4JYU-ayxfj_JJfo2Zew9lCRy1FlTa8';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, pivateVapidKey);

//подписка
app.post('/add', (req, res) => {
    
    const subscription = req.body;
    res.status(201).json({});
    const paylaod = JSON.stringify({'title': 'test'});
    webpush.sendNotification(subscription, paylaod).catch(err => console.log(err));
});

const port = 5001;
app.listen(port, () => console.log(`server started on port ${port}`))
