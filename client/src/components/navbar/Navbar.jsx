import React, { useState } from 'react';
import { Header, HeaderContainer, CatalogButton, Logo, SearchContainer, Input, ButtonUser, ButtonCart, ButtonContainer, MenuButton } from './NavbarStyled';
import { AiOutlineMenuUnfold, AiOutlineAppstore, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import ModalLogReg from '../modalLogReg/ModalLogReg';
import MobileMenu from '../mobileMenu/MobileMenu';

function Navbar() {
  const [isloginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
    <Header>
        <HeaderContainer>
            <Logo href='/'>Майстер</Logo>
            <MenuButton onClick={toggleMenu}>
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
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} openLoginModal={openLoginModal} />
      </>
  )
}

export default Navbar
