import React, { useEffect, useRef } from 'react'

const DatePicker = ({ label, onDateSelect, ...props }) => {
    const id = "input" + Math.floor(Math.random() * 100000)
    // the ref for the modal
    const datePickerElement = useRef();
    // initialize the modal
    useEffect(() => {
        // Initialize the modal and store the instance in the component instance
        DatePicker.instance = M.Datepicker.init(datePickerElement.current, {
            // format: "dd/mm/yyyy",
            format: "yyyy-mm-dd",
            container: document.body,
            onSelect: (e) => {
                onDateSelect && onDateSelect(e)
            },
            autoClose:true
        });
    }, [])

    return (


        <div className="input-field col s12">
            <input id={id} type="text" className="datepicker" ref={datePickerElement} {...props} />
            <label htmlFor={id}  >{label}</label>
        </div>

    )
}

export default DatePicker