import React, { Component } from 'react'

class Button extends Component {

    render() {
        const { children, className = "", rounded = "", fullwidth = "", ...props } = this.props
        return (

            <a className={`waves-effect waves-light btn mb-1 mr-1 ${className} ${rounded && "border-round"}${fullwidth && "col s12"}`}
                {...props}
            >
                {children}
            </a>


        )
    }
}

export default Button