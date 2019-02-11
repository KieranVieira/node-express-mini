// implement your API here
const express = require('express');

const server = express();

const db = require('./data/db');

server.use(express.json());

server.get('/api/users', (req,res) => {
    db
        .find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(({ code, message }) => {
            res.status(500).json({ success: false, message: "The users information could not be retrieved." })
        })
})

server.post('/api/users', (req, res) => {
    const user = req.body;
    db
        .insert(user)
        .then(user => {
            if(user){
                res.status(201).json({ success: true, user })
            }else{
                res.status(400).json({ success: false, message: "Please provide name and bio for the user." })
            }
        })
        .catch(() => {
            res.status(500).json({ success: false, message: "There was an error while saving the user to the database" })
        })
});

server.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    db
        .findById(userId)
        .then(user => {
            if(user){
                res.status(200).json({ success: true, user })
            }else{
                res.status(404).json({ success: false, message: "The user with the specified ID does not exist." })
            }
        })
        .catch(() => {
            res.status(500).json({ success: false, message: "The user information could not be retrieved." })
        })
});

server.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    db
        .remove(userId)
        .then(user => {
            if(user){
                res.status(200).json({ success: true, message: `The user was deleted` })
            }else{
                res.status(404).json({ success: false, message: `No user with id:${userId} was found` })
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, message: "The user with the specified ID does not exist." })
        })
});

server.put('/api/users/:id', (req, res) => {
    const user = req.body;
    const userId = req.params.id;

    db
        .update(userId, user)
        .then(user => {
            if(user){
                res.status(200).json({ success: true, message:"User was updated" })
            }else{
                res.status(404).json({ success: false, message: "The user with the specified ID does not exist." })
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, message: "The user information could not be modified." })
        })
});

server.listen(4000, () => {
    console.log('Server is listening on port 4000')
})