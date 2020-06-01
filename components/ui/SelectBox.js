import React, { useRef, useEffect } from 'react'

const SelectBox = ({ children, constrainWidth, label, ...props }) => {

  const selectElement = useRef();
  useEffect(() => {
    var instances = M.FormSelect.init(selectElement.current);
  }, [])


  return (

    <div className="input-field col s12">
      <select ref={selectElement} {...props}>
        {children}
      </select>
      <label>{label}</label>
    </div>
  )
}

export default SelectBox