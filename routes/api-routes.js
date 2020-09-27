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
    db.Workout.findOne({_id: req.params.id}, (err, workout) => {
        if(err) {
            res.status(400).send(err);
        } else {
            let exercises = (workout.exercises === null) ?  [] : workout.exercises;
            exercises.push(req.body);

            db.Workout.updateOne({_id: req.params.id}, {exercises: exercises}, (err, workouts) => {
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