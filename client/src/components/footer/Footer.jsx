import React from 'react'
import { Center, FooterStyled, FooterContainer, AddressContainer, Right, AddressList, AddressItem, AddressLink} from './FooterStyled'
import { Logo } from '../navbar/NavbarStyled'

const Footer = () => {
  return (
    <FooterStyled>
          <FooterContainer>
            <AddressContainer>
              <Logo href='/'>Майстер</Logo>
              <address>
                <AddressList>
                  <AddressItem>
                    <AddressLink href='/' target='_blank'>
                      с.Джулинка, вул. Центральна 15а</AddressLink>
                  </AddressItem>
                  <AddressItem>
                    <AddressLink href='mailto:info@master.com'>info@master.com</AddressLink>
                    </AddressItem>
                  <AddressItem>
                    <AddressLink href='tel:+380971111111'>+38 096 111 11 11</AddressLink>
                    </AddressItem>
                </AddressList>
              </address>
            </AddressContainer>
            <Center>
                
            </Center>
            <Right>
                
            </Right>
          </FooterContainer>  
    </FooterStyled>

  )
}

export default Footer
