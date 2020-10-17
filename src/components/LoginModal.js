import React, { useRef } from 'react';
import FirebaseAuth from './FirebaseAuth';
import { animated, useTransition } from 'react-spring'
import { CloseButton } from './Button';
import styled from 'styled-components';
import useClickOutside from '../utilities/useClickOutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = styled(animated.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    min-height: 300px;
    max-height: 500px;
    width: 100%;
    max-width: 500px;
    border: solid lightgray 1px;
    box-shadow: 0px 0px 5px 10px rgba(0,0,0,0.1);
    border-radius: 20px;
    text-align: center;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 2rem;
        cursor: pointer;
    }
`;

const LoginModal = ({ showModal, setShowModal }) => {
    const ref = useRef();
    useClickOutside(ref, () => setShowModal(false));
    const transitions = useTransition(showModal, null, {
        from: { opacity: 0, transform: "translate(-50%, -45%)" },
        enter: { opacity: 1, transform: "translate(-50%, -50%)" },
        leave: { opacity: 0, transform: "translate(-50%, -45%)" }
    });
    return (
        transitions.map(({ item, key, props }) => {
            return item && <Modal key={key} style={props} ref={ref} >
                    <div>
                        <CloseButton onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimes} className="icon"></FontAwesomeIcon></CloseButton>
                        <h2>Login to your Account</h2>
                        <FirebaseAuth />
                    </div>
            </Modal>
        })
        
    )
}

export default LoginModal;
