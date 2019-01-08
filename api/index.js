// requirements
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 3000
const mongoose =  require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//import models
const User = require('./models/user')
const Message = require('./models/message')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }

// app use cors
app.use(cors(corsOptions))

// connect to mongoDB
mongoose.connect('mongodb://myvitaeuser:zZxXcC11!!@ds161410.mlab.com:61410/myvitae')
let db = mongoose.connection;


db.on('error', console.error.bind(console,'connection error'));

/*
MongoClient.connect('mongodb://myvitaeuser:zZxXcC11!!@ds161410.mlab.com:61410/myvitae', function (err, client) {

if (err) throw err
const db = client.db('myvitae')

app.post('/api/user/:action/:userId', function (req,res) {
    if (req.params.action == "register") {
        db.collection('users').save(req.body, (err, result) => {
            if (err) return console.log(err)
            console.log('saved to database')
            res.redirect('/')
          })
    }
    if (req.params.action == "get") {
        if (req.params.userId == "undefined") {

        }
        else {

        }
    }
    if (req.params.action == "remove") {
        if(req.params.userId == "undefined") {

        } else {

        }
    }
    })
})
*/

let newUser = new User({
    username: 'dante450',
    password: '450051',
    firstName: 'Dante',
    lastName: 'Perea',
    admin: true
})
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'test.html')))
app.post('/api/message/addMessage/:userId*?', (req,res) => {

    if(!req.params.userId) {
        var newMessage = new Message({ username: 'Dante450', name: req.body.name, email: req.body.email, message: req.body.message })
    } else {
        var newMessage = new Message({ username: req.params.userId, subject: req.body.subject, message: req.body.message })
    }

    Message.init()
        .then( () => {
            Message.create(newMessage, (err) => {
                if(err) {
                    res.json(err);
                }
            })
        })
    
res.send('this works')
})

app.post('/api/user/update', (req,res) => {
    const query = {'username': req.body.username }
    updateUser = new User({
        company: req.body.company,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        zipCode: req.body.zipCode,
        aboutMe: req.body.aboutMe
    });

    User.init()
        .then( () => {
            User.findOneAndUpdate(query, updateUser, {upsert: true}, (err, doc) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    return res.send('Success!');
                }
            })
        })
})

app.post('/api/user/createAccount', (req,res) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash
            })

            User.init()
                .then( () => {
                    User.create(newUser, (err) => {
                        if(err) {
                            res.json(err);
                        } else {
                            console.log('Success!');
                        }
                    })
                })
        }
    })
})
app.get('/addUser', (req,res) => {
    User.init()
        .then( () => {
            User.create(newUser, (err) => {
                if( err ) {
                    console.log(err)
                } 
            })
        })
    
res.send('this works')
})
/*
app.get('/api/user', (req,res) => {
    User.init()
        .then( () => {
            User.find({},(err, docs) => {});
            console.log(docs);
        })
})*/
app.get('/api/user/:userId', (req,res) => {
    User.init()
        .then( () => {
            User.findOne({ username: req.params.userId }, (err,user) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log(req.params.userId);
                    res.json(user);
                }
            })
        })
})


//log in
app.post('/testSignIn', (req,res) => {
    User.findOne({ username: req.body.username }, (err,user) => {
        if(err) {
            console.log(err)
        } else if (user) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                if(result) {
                    console.log(req.body.username);
                    console.log('user object: '+user);
                    
                   const JWTToken = jwt.sign({
                      email: user.email,
                      _id: user._id
                   },
                   'secret',
                      {
                         expiresIn: '2h'
                      });
                   return res.status(200).json({
                      success: 'Welcome to the JWT Auth',
                      token: JWTToken,
                      expiresIn: '7200000',
                      username: req.body.username
                   });
                }
                return res.status(401).json({
                   failed: 'Unauthorized Access'
                });

            })
        } else {
            res.status(500).json({
                failed: 'User does not exist'
            })
        }
    })
})
app.post('/signin', function(req, res){
    User.findOne({email: req.body.email})
    .exec()
    .then(function(user) {
       bcrypt.compare(req.body.password, user.password, function(err, result){
          if(err) {
             return res.status(401).json({
                failed: 'Unauthorized Access'
             });
          }
          if(result) {
             const JWTToken = jwt.sign({
                email: user.email,
                _id: user._id
             },
             'secret',
                {
                   expiresIn: '2h'
                });
             return res.status(200).json({
                success: 'Welcome to the JWT Auth',
                token: JWTToken
             });
          }
          return res.status(401).json({
             failed: 'Unauthorized Access'
          });
       });
    })
    .catch(error => {
       res.status(500).json({
          error: error
       });
    });;
 });
 
app.post('/post', (req,res) => res.send(req.body.inputId))
app.listen(port, () => console.log('Example app listening on port ${port}'))
