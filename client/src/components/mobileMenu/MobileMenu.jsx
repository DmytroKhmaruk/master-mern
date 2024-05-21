import React from 'react'
import { Overlay, MobileMenuContainer, MobileButtonUser } from './MobileMenuStyled'
import { AiOutlineUser } from "react-icons/ai";
import MobileLogo from '../mobileLogo/MobileLogo';

function MobileMenu({isOpen, onClose, openLoginModal}) {
    return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
        <MobileMenuContainer onClick={(e) => e.stopPropagation()}>
          <MobileLogo/>
          <MobileButtonUser onClick={openLoginModal}>
            <AiOutlineUser />
            Вхід
          </MobileButtonUser>
        </MobileMenuContainer>
    </Overlay>
  )
}

export default MobileMenu
