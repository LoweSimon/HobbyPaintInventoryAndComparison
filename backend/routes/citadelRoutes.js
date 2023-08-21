import express from 'express';
import { 
    createPaint,
    getPaint,
    getPaints,
    deletePaint,
    updatePaint
}from '../controllers/citadelController.js';
import { requireAuth } from './../middleware/requireAuth.js';

const router = express.Router()

// require auth for all paint routes
// router.use(requireAuth)

// GET all paints
router.get('/', getPaints)

// GET single paint
router.get('/:id', getPaint)

// POST a new paint
router.post('/', createPaint)

// DELETE a new paint
router.delete('/:id', deletePaint)

// UPDATE a new paint
router.patch('/:id', updatePaint)

export default router