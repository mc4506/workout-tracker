const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        enum: ["resistance", "cardio"],
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
        required: function() {
            return this.type = "resistance";
        }
    },
    reps: {
        type: Number,
        required: function() {
            return this.type = "resistance";
        },
        min: [1, "Can't have less than 1 rep"]
    },
    sets: {
        type: Number,
        required: function() {
            return this.type = "resistance";
        },
        min: [1, "Can't have less than 1 set"]
    },
    distance: {
        type: Number,
        required: function() {
            return this.type = "cardio";
        }
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;