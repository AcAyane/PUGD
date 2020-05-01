import React from 'react'

const TextBox = ({ label, value, icon, Multiline, type = "text", ...props }) => {
    const id = "input" + Math.floor(Math.random() * 100000);
    return (
        <React.Fragment>
            {
                Multiline ?
                      <div className="input-field col s12">
                        <textarea id={id} className="materialize-textarea" value={value}  {...props} />
                        <label htmlFor={id}>{label}</label>
                    </div> : <div className="input-field col s12">
                        {icon && <i className="material-icons prefix pt-2">{icon}</i>}
                        <input id={id} type={type} value={value}  {...props} />
                        <label htmlFor={id} className={value !== "" ? "active" : ""}>{label}</label>
                    </div>

            }


        </React.Fragment>

    )
}

export default TextBox
