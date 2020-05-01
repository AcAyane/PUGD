import React, {useState} from 'react'

const ToggleSwitch =
    ({ prefix, sufix, label, value, type = "checkbox", ...props }) => {
        const [ open, setOpen ] = useState(true)
    return (
        <React.Fragment>
            {

                    <div className="switch">
                        {label}
                        <label>
                            {prefix}<input type={type} value={value}
                                           checked={open}
                                           {...props}
                                           onClick={ () =>{console.log(open);setOpen(!open)}}
                        />
                            <span className="lever"/>{open === true ? sufix : 'in'+sufix}
                        </label>
                    </div>
            }


        </React.Fragment>

    )
}
export default ToggleSwitch
