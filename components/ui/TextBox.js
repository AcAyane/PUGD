import React from 'react'

const TextBox = ({ label,icon, ...props }) => {
    const id = "input" + Math.floor(Math.random() * 100000)
    return (
        <React.Fragment>
            <div className="input-field col s12">
                {icon && <i className="material-icons prefix pt-2">{icon}</i>}
                <input id={id}  {...props} />
                <label htmlFor={id}>{label}</label>
            </div>

        </React.Fragment>

    )
}

export default TextBox