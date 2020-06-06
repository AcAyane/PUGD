import React from 'react'

const TextArea = ({ label,text, ...props }) => {
    const id = "id"+Math.random()*10000;
    return (
        <div className="row">
            <div className="input-field col s12">
                <textarea id={id} className="materialize-textarea" {...props }>{text}</textarea>
                <label htmlFor={id}>{label}</label>
            </div>
        </div>
    )
}

export default TextArea

