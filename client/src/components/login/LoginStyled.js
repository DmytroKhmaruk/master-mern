import styled from 'styled-components';


export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    background-color: rgba(0,0,0,0.5);
    
`

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    z-index: 3;

    width: 500px;
    height: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    
`

export const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`