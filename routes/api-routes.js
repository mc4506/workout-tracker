const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({}, (err, workouts) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.json(workouts);
        }
    });
});

router.get('/api/workouts/range', (req, res) => {

});

router.put('/api/workouts/:id', (req, res) => {
    
});

router.post('/api/workouts', (req, res) => {
    const day = new Date();
    db.Workout.create( {day: day, exercises: []}, (err, workouts) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.json(workouts);
        }
    });
});



module.exports = router;