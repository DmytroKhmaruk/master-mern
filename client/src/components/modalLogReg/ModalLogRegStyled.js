import styled from 'styled-components';


export const Overlay = styled.div`
    position: fixed;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;

    background-color: rgba(0,0,0,0.5);
    transition: opacity 0.3s ease, visibility 0.3s ease;
`

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 5;

    width: 528px;
    background-color: #ffffff;
    padding: 20px;
    
        @media screen and (max-width: 767.5px){
        width: 101%;
        height: 100%;
        box-sizing: border-box;
    }
    @media screen and (min-width: 768px){
        border-radius: 5px;
    }
`

export const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        color: #F37A1F;
    }
`
export const ModalTitle = styled.p`
    text-align: center;
    margin-bottom: 20px;

    font-weight: 700;
    font-size: 20px;
`

export const InputContainer = styled.div`
    position: relative;
    display: block;
    margin-bottom: 20px;
    
`

export const ModalInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid rgba(33, 33, 33, .2);
    border-radius: 4px;
    outline: rgba(0, 0, 0, 0);
    padding: 0 8px;
    cursor: pointer;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;

     &:hover {
        border-color: rgba(243, 122, 31, 0.5);
    }

    &:focus {
        border-color: #F37A1F;
        box-shadow: 0 0 0 1px rgba(243, 122, 31, 0.8);
    }
`

export const ModalButton = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;

    border-radius: 4px;
    padding: 10px 24px;
    min-width: 200px;
    height: 48px;
    background-color: #F37A1F;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    border: none;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        transform: scale(1.02);
    }
`

export const ChangButton = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;

    border: none;
    background-color: #ffffff;
    text-decoration: underline;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    @media screen and (min-width: 768px){
          &:hover {
        color: #F37A1F;
        }
    }
`