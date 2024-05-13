import styled from 'styled-components';

export const Header = styled.header`
    

    border-bottom: 1px solid #ececec;
    /* outline: 1px solid red; */

    /* @media screen and (max-width: 767.5px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #ffffff;
        z-index: 1000;
    } */
`

export const HeaderContainer = styled.div`
/* outline: 1px solid red; */
    
    
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;

    @media screen and (max-width: 767.5px) {
        height: 52px;
        padding-left: 16px;
        padding-right: 16px;
        
    }

    @media screen and (min-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
        height: 72px;
    }
   
   @media screen and (min-width: 768px)and (max-width: 1239px){
        width: 768px;
   }

   @media screen and (min-width: 1240px){
        width: 1200px;
   }
`

export const Logo = styled.a`
    padding: 8px 0 12px;
    color: #F37A1F;
    font-weight: 900;
    font-size: 40px;
    line-height: 1.19;
    display: flex;
    align-items: center;

    @media screen and (max-width: 767.5px){
        display: none;
    }

    /* &:hover{
        transform: scale(1.02);
    } */
`

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    
    background-color: white;
    border: none;
    
    & svg {
    width: 24px;
    height: 24px;
    /* padding: 12px 0; */
  }

    @media screen and (min-width: 768px){
        display: none;
    }
`

export const CatalogButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    padding: 8px 12px;
    height: 40px;

    cursor: pointer;
    color: white;
    background-color: #F37A1F;
    border-radius: 4px;
    border: none;

    font-size: 16px;
    
    &:hover{
        transform: scale(1.02);
    }

    & svg {
    width: 24px;
    height: 24px;
    padding-right: 4px;
    
  }

  @media screen and (max-width: 767.5px){
        display: none;
    }
`

export const SearchContainer = styled.div`
   border: 1px solid lightgray;
   border-radius: 4px;
   display: flex;
   align-items: center;
   
   
   height: 39px;

    &:focus-within {
    border-color: #F37A1F;
  }
    
   & svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
    padding: 8px;

    color: white;
    background-color: #F37A1F;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
    & svg:hover{
        transform: scale(1.02);
    }

    @media screen and (max-width: 767.5px) {
         width: 100%;
    }

    @media screen and (min-width: 768px)and (max-width: 1239px){
        max-width: 500px;
        width: 100%;
        margin-left: 40px;
   }

   @media screen and (min-width: 1240px){
        max-width: 640px;
        width: 100%;
        margin-left: 40px;
   }
`

export const Input = styled.input`
    border: none;
    max-width: 640px;
    width: 100%;
    padding: 4px 12px 4px 12px;
    
    &:focus {
    outline: none;
    
  @media screen and (max-width: 767.5px) {
         width: 100%;
    }

  @media screen and (min-width: 768px)and (max-width: 1239px){
        max-width: 500px;
        width: 100%;
   }

   @media screen and (min-width: 1240px){
        max-width: 640px;
        width: 100%;
   }
}
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    /* outline: 1px solid red; */
`

export const ButtonUser = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-right: 1.5px solid #212121;

   

    & svg {
    width: 24px;
    height: 24px;
    padding: 4px 8px;
    
  }

   & svg:hover{
        transform: scale(1.02);
        color: #F37A1F;
    }

    @media screen and (max-width: 767.5px){
        display: none;
    }
`

export const ButtonCart = styled.button`
/* outline: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border: none;
   

    & svg {
    width: 24px;
    height: 24px;
    padding: 4px 0 4px 8px;
    
  }

   & svg:hover{
        transform: scale(1.02);
        color: #F37A1F;
    }

    @media screen and (max-width: 767.5px){
        margin-left: 8px;
    }
`
