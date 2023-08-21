import Paint from '../models/citadelModel.js';
import mongoose from 'mongoose';


// get all paint
export const getPaints = async (req, res) => {
    const allPaints = await Paint.find({}).sort({createdAt: -1})

    res.status(200).json(allPaints)
}

// get single paint
export const getPaint = async (req, res) => {
    const { id } = req.params

    // checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such paint"})
    }

    const paint = await Paint.findById(id)

    if (!paint) {
        return res.status(404).json({error: "No such paint"})
    }

    res.status(200).json(paint)
}

// create new paint
export const createPaint = async (req, res) => {
    const {paintCompany, paintTitle, paintType, paintImage} = req.body

    // add doc to db
    try {
        const paint = await Paint.create({paintCompany, paintTitle, paintType, paintImage})
        res.status(200).json(paint)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a paint
export const deletePaint = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such paint"})
    }

    const paint = await Paint.findOneAndDelete({_id: id})

    if (!paint) {
        return res.status(404).json({error: "No such paint"})
    }

    res.status(200).json(paint)
}

// update a paint
export const updatePaint = async (req, res) => {
    // grabbing the id
    const { id } = req.params

    // checking if the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such paint"})
    }

    const paint = await Paint.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!paint) {
        return res.status(404).json({error: "No such paint"})
    }

    res.status(200).json(paint)
}