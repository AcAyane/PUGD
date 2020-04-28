import React, { useRef, useEffect, useState } from 'react'

const Modal = ({ children, ...props }) => {
    // const [modalInstance, setModalInstance] = useState(undefined);
    const modalElement = useRef();
    useEffect(() => {
        var instance = M.Modal.init(modalElement.current,{
            preventScrolling:true
        });
    }, [])


    return (
        <React.Fragment><a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        
            <div id="modal1" className="modal" ref={modalElement}>
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Modal