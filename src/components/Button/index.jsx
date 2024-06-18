import React from 'react'

import { ButtonContainer,  TextContent} from './styles';

const Button = ({title, onClick, disabled, color}) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} type={color}>
      <TextContent>{title}</TextContent>
    </ButtonContainer>
  )
}

export { Button }