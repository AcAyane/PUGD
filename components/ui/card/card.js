import React from 'react'

const Card = ({ children, ...props }) => {
    return (
        <div className="card" {...props}>
            <div className="card-content">
            {children}
            </div>
        </div>
    )
}

export default Card