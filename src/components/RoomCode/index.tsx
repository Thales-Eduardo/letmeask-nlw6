import React from 'react';

import copyImg from '../../assets/images/copy.svg';

import { Container } from './styles';

interface ButtonProps {
  code: string;
}

export const RoomCode: React.FC<ButtonProps> = ({ code }) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>{code}</span>
    </Container>
  );
};
