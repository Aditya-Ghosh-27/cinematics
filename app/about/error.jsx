"use client"

export default function Error({error, reset}){
    return (
        <div>
            <h2>Someting went wrong</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}