//import React from 'react'
import { useParams } from "react-router-dom"

function ResultsMovies() {

    const { nameMovie } = useParams();

    return (
        <main>
            <section>
                {nameMovie}
            </section>
        </main>
    )
}

export default ResultsMovies