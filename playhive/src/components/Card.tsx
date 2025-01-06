import { useRouter } from 'next/router'
import React from 'react'

interface Game {
    title:string,
    statement:string,
    img:string
}

function Card({game}:{game:Game}) {
    const router = useRouter();
    return (
        <div className="card bg-base-100 w-80 shadow-xl dark:bg-transparent/90">
            <figure>
                <img
                    src={game.img}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{game.title}</h2>
                <p>{game.statement}</p>
                <div className="card-actions flex justify-start items-center">
                    <button className="btn btn-primary">Create a Game</button>
                    <button className="btn btn-outline bg-white">Join</button>
                </div>
            </div>
        </div>
    )
}

export default Card