const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [
        {
            // type: Schema.Types.ObjectId,
            // ref: "Exercise"
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
        }
    ]
}, {
    toJSON: { virtuals: true}
});

WorkoutSchema.virtual('totalDuration')
    .get( function() {
        return this.exercises.reduce((accumulator, exercise) => accumulator + exercise.duration, 0)
    })

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

