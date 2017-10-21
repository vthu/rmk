import React from 'react';

const Card = ({ src, description, date }) => (
    <div className="card">
        <img src={src} />
        <p>{description}</p>
        <p>{date}</p>
    </div>
)