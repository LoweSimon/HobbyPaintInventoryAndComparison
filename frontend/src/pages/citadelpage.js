import React from "react";
import { useEffect } from "react";

import { usePaintsContext } from '../hooks/usePaintContext.js';

import { PaintDetails } from "../components/PaintDetails.js";
import { Container } from 'react-bootstrap';



export default function CitadelPage() {

    const { dispatch} = usePaintsContext()

    useEffect(() => {
        const fetchPaints = async () => {
            const response = await fetch('http://localhost:4000/api/citadel')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PAINTS', payload: json})
            }
        }

        fetchPaints()

    }, [dispatch])

    return (
        <>

        <h1 className="title text-center"><strong>Citadel Paint</strong></h1>

        <Container className="border border-primary rounded bg-secondary">
            <PaintDetails />
        </Container>

        </>        
    )
}