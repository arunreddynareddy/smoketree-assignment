import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    addresses: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Address"}
    ]
})

export default mongoose.model("User", userModel)