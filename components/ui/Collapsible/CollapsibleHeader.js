import React, { useRef, useEffect } from 'react'
import Icon from '../Icon/Icon'
<<<<<<< HEAD
const CollapsibleHeader = ({ children, headerHeight,...props }) => {
=======
const CollapsibleHeader = ({ children, ...props }) => {
>>>>>>> develop


    const reff = useRef();
    useEffect(() => {
        reff.current.addEventListener('click', (event) => {
            if(event.target.nodeName!=="I")
            event.stopPropagation();
        }, false);
    }, [])

    return <div className="collapsible-header" {...props} >
        <div ref={reff}  style={{width:"100%"}}>
            {children}
        </div>
<<<<<<< HEAD
        <Icon className="collapsible-icon" style={{ marginLeft: "auto","line-height":headerHeight }}>keyboard_arrow_right</Icon>
=======
        <Icon className="collapsible-icon" style={{ marginLeft: "auto" }}>keyboard_arrow_right</Icon>
>>>>>>> develop

    </div>

}
export default CollapsibleHeader;