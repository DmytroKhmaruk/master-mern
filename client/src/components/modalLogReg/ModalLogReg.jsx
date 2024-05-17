import React, { useEffect, useState } from 'react'
import { ChangButton, CloseButton, InputContainer, ModalButton, ModalContent, ModalInput, ModalTitle, Overlay } from './ModalLogRegStyled'

function Login({ onClose }) {
  const [isRegistration, setIsRegistration] = useState(false);

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    }

    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [onClose]);

  const toggleForm = () => {
    setIsRegistration(!isRegistration);
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton type='button' onClick={onClose}>Х</CloseButton>
        <ModalTitle>{ isRegistration ? 'Реєстріція' : 'Вхід'}</ModalTitle>
        <form>
              {isRegistration && (
                <InputContainer>
                <ModalInput 
                type="text" 
                name="user-name"
                id="user-name"
                placeholder="Повне ім'я"
                />
                </InputContainer>
              )}
              <InputContainer>
              <ModalInput 
              type="email" 
              name="user-email"
              id="user-email"
              placeholder='Пошта'
              />
              </InputContainer>
              <InputContainer>
              <ModalInput 
              type="password" 
              name="user-password"
              id="user-password"
              placeholder='Пароль'
              />
              </InputContainer>
             <ModalButton type='submit'>{ isRegistration ? 'Зареєструватися' : 'Увійти'}</ModalButton>
             <ChangButton type='button' onClick={toggleForm}>{ isRegistration ? 'Увійти' : 'Створити особистий кабінет'}</ChangButton>
        </form>
      </ModalContent>
    </Overlay>
  )
}

export default Login
