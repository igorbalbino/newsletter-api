import mongoose from "mongoose"

const Email = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    type: {
        type: String,
        require: true,
        default: 'N'
    },
    ativo: {
        type: String,
        require: true,
        default: 'S'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Email', Email)