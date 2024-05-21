import styled from 'styled-components';

export const Overlay = styled.div.attrs(props => ({
    style: {
        opacity: props.$isOpen ? '1' : '0',
        visibility: props.$isOpen ? 'visible' : 'hidden',
        display: props.$isOpen ? 'block' : 'none'
    }
}))`
    position: fixed;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    background-color: rgba(0,0,0,0.5);
    transition: opacity 0.3s ease, visibility 0.3s ease;
`

export const MobileMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    width: 70%;
    height: 100%;
    background-color: #ffffff;

`

export const MobileButtonUser = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-top: 1px solid black;
    width: 100%;

    & svg {
    width: 24px;
    height: 24px;
    padding: 4px 8px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

   & svg:hover{
        color: #F37A1F;
    }
`