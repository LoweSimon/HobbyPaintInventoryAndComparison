import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// log in user
export const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(300).json({error: error.message})
    }
}

// sign up user
export const signupUser = async (req, res) => {
    const {name, username, email, password} = req.body

    try {
        const user = await User.signup(name, username, email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}