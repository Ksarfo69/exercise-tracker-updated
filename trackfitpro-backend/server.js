const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database established succesfully`)
});

const exercise = require('./backend/models/exerciseSchema');

app.get('/exercises', async (req, res) => {
    const alltodos = await exercise.find();
    res.json(alltodos)
})

app.get('/exercises/:id', async (req, res) => {
        const get = await exercise.findById(req.params.id);

        res.json(get)
})


app.post('/exercises/add', (req, res)=>{
    const addtodo = new exercise ({
        user: req.body.user,
        exercise: req.body.exercise,
        duration: req.body.duration,
        date: req.body.date
    });
    addtodo.save();
    res.json(addtodo);
})

app.delete('/exercises/delete/:id', async (req, res) => {
    const listafterdelete = await exercise.findByIdAndDelete(req.params.id);

    res.json(listafterdelete)
})

app.put('/exercises/edit/:id', async (req, res) => {
    const completedstatus = await exercise.findById(req.params.id)
    
    completedstatus.user = req.body.user;
    completedstatus.exercise = req.body.exercise;
    completedstatus.duration = req.body.duration;
    completedstatus.date = req.body.date;



       
       
     completedstatus.save();
    
    
    res.json(completedstatus);

})



const user = require('./backend/models/userSchema');

app.get('/users', async (req, res) => {
    const allusers = await user.find();
    res.json(allusers);
})

app.post('/users/add', (req, res) => {
    const addnew = new user ({
        username: req.body.username,
        age: req.body.age
    })

    addnew.save();
    res.json(addnew);
})

app.delete('/users/delete/:id', async (req, res) => {
    const deleteuser = await user.findByIdAndDelete (req.params.id);
    res.json(deleteuser);
})

app.put('/users/edit/:id', async (req, res) => {
    const updateuser = await user.findById(req.params.id)
    updateuser = {
        username: req.body.username,
        age: req.age.age
    }
    updateuser.save();
    res.json(updateuser);
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 





