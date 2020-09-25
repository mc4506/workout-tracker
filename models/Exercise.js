const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true,
        min: [1, "Can't have less than 1 rep"]
    },
    sets: {
        type: Number,
        required: true,
        min: [1, "Can't have less than 1 set"]
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;