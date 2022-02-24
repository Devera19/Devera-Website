import React from 'react'
import "./card.css"

export default function Card(props) {
  return (
    <section className="cards">
        <div className="card-shape">
            <div className="icon">
                Icon here
            </div>
            <div className="info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
      </section>
  )
}
