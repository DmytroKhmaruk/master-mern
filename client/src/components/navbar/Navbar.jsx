import React from 'react';
import { Header, HeaderContainer, CatalogButton, Logo, SearchContainer, Input, ButtonUser, ButtonCart, ButtonContainer, MenuButton } from './NavbarStyled';
import { AiOutlineMenuUnfold, AiOutlineAppstore, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
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
            <ButtonUser>
              <AiOutlineUser/>
            </ButtonUser>
            <ButtonCart>
              <AiOutlineShoppingCart/>
            </ButtonCart>
          </ButtonContainer>
        </HeaderContainer>
    </Header>
  )
}

export default Navbar
