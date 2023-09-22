import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true,
    },
    subject: { 
        type: String, 
        required: true ,
    },
    message: { 
        type: String, 
        required: true ,
    },
});

export default mongoose.model("Contactus", ContactSchema);
