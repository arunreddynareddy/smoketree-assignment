import mongoose from "mongoose";

const addressModel = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    user: [
        {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    ]
})

export default mongoose.model("Address", addressModel)