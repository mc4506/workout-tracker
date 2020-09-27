const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {
    // find all workout records
    Workout.find({}, (err, workouts) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.json(workouts);
        }
    });
});

router.get('/api/workouts/range', (req, res) => {
    // find all workout records
    Workout.find({}, (err, workouts) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.json(workouts);
        }
    });
});

router.put('/api/workouts/:id', (req, res) => {
    // find workout record. and push new exercise object into a new exercise array. Update record with new exercise array.
    Workout.findOne({_id: req.params.id}, (err, workout) => {
        if(err) {
            res.status(400).send(err);
        } else {
            let exercises = (workout.exercises === null) ?  [] : workout.exercises;
            exercises.push(req.body);

            Workout.updateOne({_id: req.params.id}, {exercises: exercises}, (err, workouts) => {
                if(err) {
                    res.status(400).send(err);
                } else {
                    res.json(workouts);
                };
            });
        };
    });
});

router.post('/api/workouts', (req, res) => {
    // create a new workout record with current Date object and an empty exercise object. Send back record with id.
    const day = new Date();
    Workout.create( {day: day, exercises: []}, (err, workouts) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.json(workouts);
        }
    });
});



module.exports = router;