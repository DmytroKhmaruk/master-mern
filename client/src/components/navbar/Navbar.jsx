import React, { useState } from 'react';
import { Header, HeaderContainer, CatalogButton, Logo, SearchContainer, Input, ButtonUser, ButtonCart, ButtonContainer, MenuButton } from './NavbarStyled';
import { AiOutlineMenuUnfold, AiOutlineAppstore, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import ModalLogReg from '../modalLogReg/ModalLogReg';

function Navbar() {
  const [isloginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <Header>
        <HeaderContainer>
            <Logo href='/'>Майстер</Logo>
            <MenuButton>
              < AiOutlineMenuUnfold/>
            </MenuButton>
            <CatalogButton type='button'>
                <AiOutlineAppstore />
                Каталог
            </CatalogButton>
            <SearchContainer>
              <Input/>
              <AiOutlineSearch/>
            </SearchContainer>  
          <ButtonContainer>
            <ButtonUser onClick={openLoginModal}>
              <AiOutlineUser/>
            </ButtonUser>
            <ButtonCart>
              <AiOutlineShoppingCart/>
            </ButtonCart>
          </ButtonContainer>
        </HeaderContainer>
        {isloginOpen && <ModalLogReg onClose={closeLoginModal} />}
    </Header>
  )
}

export default Navbar
