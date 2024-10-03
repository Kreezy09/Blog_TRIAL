const {model, Schema} = require('mongoose');

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: false,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

module.exports = model("post", postSchema);