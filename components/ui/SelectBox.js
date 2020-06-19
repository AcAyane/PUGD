import React, { useRef, useEffect } from 'react'

const SelectBox = ({ children, constrainWidth, setInstance, label, ...props }) => {

  const selectElement = useRef();
  useEffect(() => {
    var instances = M.FormSelect.init(selectElement.current);
    if (setInstance) {
      setInstance(instances)
    }
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