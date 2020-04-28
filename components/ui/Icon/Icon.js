import React from 'react'

const Icon = ({ children, ...props }) => {

    return (
        <i className="material-icons" {...props}>{children}</i>
    )
}

export default Icon