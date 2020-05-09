import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>{
    return (
        <Modal 
            isOpen = {!!props.selectedOption}
            onRequestClose = {props.clearSelectedOption}
            contentLabel = "Selected Option"
            ariaHideApp = {false}
            className = "modal"
        >
        <h1 className="modal__title">To do:</h1>
        {props.selectedOption && <p className="modal__content">{props.selectedOption}</p>}   
        <button 
            onClick={props.clearSelectedOption}
            className="button"
        >Okay</button>
        </Modal>
    );
}

export default OptionModal;