import React from 'react'

const Button = ({ children, className = "", rounded = "", fullwidth = "", ...props }) => {
    return (

            <a  className={`waves-effect waves-light btn mb-1 mr-1 ${className} ${rounded && "border-round"}${fullwidth && "col s12"}`}
                {...props}
            >
                {children}
            </a>


    )
}

export default Button
