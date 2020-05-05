const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var path = require('path');
const {ObjectId} = require('mongodb');
var dbo;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) return console.log(err);
  dbo = db.db("sweetscomplete");
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    let countries = [];
    dbo.collection('customers').find().toArray((err, result) => {
        if (err) return console.log(err);
        dbo.collection('customers').distinct('country',(err, result2) => {
            countries = result2;
            console.log(countries);
            res.render('index.ejs', {customers: result, countries: countries})

        });
    });
});

app.post('/', (req, res) => {
    let sort;
    let country;
    (req.body.sub == 'DESC') ?  sort = -1: sort = 1;
    country  = req.body.country;
    dbo.collection('customers').createIndex(
        {
            name: "text",
            address: "text"
        }
    );

    dbo.collection('customers').find({country: country}).limit(5).sort({name:sort}).toArray((err, result) => {
        dbo.collection('customers').distinct('country',(err, result2) => {
            countries = result2;
            if (err) return console.log(err);
            res.render('index.ejs', {customers: result, countries: countries})
        });

    })

});



app.post('/search', (req, res) => {
    dbo.collection('customers').find({ $text: { $search: req.body.search } }).toArray((err, result) => {
        if (err) return console.log(err);
        res.render('search.ejs', {customers: result})
    })
});

app.post('/add', (req, res) => {
    dbo.collection('customers').save(req.body, (err, result) => {
        if (err) return console.log(err);
        res.redirect('/')
    })
});

app.post('/postedit', (req, res) => {
    dbo.collection('customers')
        .findOneAndUpdate({_id: ObjectId(req.body.hidden_id)}, {
            $set: {
                name: req.body.name,
                address: req.body.address,
                country: req.body.country,
                city: req.body.city,
                phone: req.body.phone,
                email: req.body.email,
                postal_code: req.body.postal_code
            }
        }, (err, result) => {
            if (err) return res.send(err);
            res.redirect('/')
        });
});

app.post('/del/:id', (req, res) => {
    dbo.collection('customers').findOneAndDelete({_id: ObjectId(req.params.id)}, (err, result) => {
        if (err) return res.send(500, err);
        res.redirect('/');
    })
});

app.get('/read/:id', (req, res) => {
    dbo.collection('customers').find({_id: ObjectId(req.params.id)}).toArray((err, result) => {
        if (err) return console.log(err);
        res.render('read.ejs',{customer: result})
    })
});

app.get('/edit/:id', (req, res) => {
    dbo.collection('customers').find({_id: ObjectId(req.params.id)}).toArray((err, result) => {
        console.log(result);
        if (err) return console.log(err);
        res.render('edit.ejs',{customer: result})
    })
});
