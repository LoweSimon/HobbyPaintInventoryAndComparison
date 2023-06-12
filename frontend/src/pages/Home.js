import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import { usePaintsContext } from './../hooks/usePaintContext.js';
// import { useAuthContext } from './../hooks/useAuthContext.js';

import PaintDetails from "../components/PaintDetails.js";



export default function Home() {

    const {paints, dispatch} = usePaintsContext()
    // const {user} = useAuthContext()

    useEffect(() => {
        const fetchPaints = async () => {
            const response = await fetch('http://localhost:4000/api/paint' 
            // {
            //     headers: {
            //         'Authorisation': `Bearer ${user.token}`
            //     },
            // }
            )
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PAINTS', payload: json})
            }
        }

        // if (user) {
        //     fetchPaints()
        // }
        fetchPaints()

    }, [dispatch])

    return (
        <div className="home">
            <h1 className="text-center">Home Page</h1>
                <Container className="border border-primary rounded bg-secondary">
                    <div className="paints">
                        {paints && paints.map((paint) => (
                            <PaintDetails key={paint._id} paint={paint} />
                        ))}
                    </div>

                </Container>
        </div>
    )
}