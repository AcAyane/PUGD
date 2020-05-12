import React, { useRef, useEffect } from 'react'
import Icon from '../Icon/Icon'
const CollapsibleHeader = ({ children, ...props }) => {


    const reff = useRef();
    useEffect(() => {
        reff.current.addEventListener('click', (event) => {
            event.stopPropagation();
        }, false);
    }, [])

    return <div className="collapsible-header" {...props} >
        <div ref={reff}>
            {children}
        </div>
        <Icon className="collapsible-icon" style={{ marginLeft: "auto" }}>keyboard_arrow_right</Icon>

    </div>

}
export default CollapsibleHeader;