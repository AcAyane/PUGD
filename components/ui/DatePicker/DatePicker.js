import React, { useEffect, useRef } from 'react'

const DatePicker = ({ label,icon, value, ...props }) => {
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
                setNativeValue(datePickerElement.current, e.toISOString().split('T')[0])
                datePickerElement.current.dispatchEvent(new Event('input', { bubbles: true }));
            },
            autoClose: true
        });
    }, [])

    function setNativeValue(element, value) {
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(element, value);
        } else {
            valueSetter.call(element, value);
        }
    }

    return (


        <React.Fragment>
            {icon && <i className="material-icons prefix pt-1">{icon}</i>}
            <input id={id} type="text" className="datepicker" ref={datePickerElement} {...props} value={value} />
            <label htmlFor={id} className={value !== "" ? "active" : ""}>{label}</label>
        </React.Fragment>

    )
}

export default DatePicker