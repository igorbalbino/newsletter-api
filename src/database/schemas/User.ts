import mongoose from "mongoose"

const User = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        select: false,
    },
    type: {
        type: String,
        require: true,
        default: 'U'
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

export default mongoose.model('User', User)