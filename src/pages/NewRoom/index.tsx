import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustration from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';

import { database } from '../../services/firebase';

import { useAuth } from '../../hooks/Auth';

import { Container, Aside, Main, Content } from './styles';

export const NewRoom: React.FC = () => {
  const [newRoom, setNewRoom] = useState('');
  const { user } = useAuth();
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Aside>
        <img src={illustration} alt="ilustração das perguntas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>
      <Main>
        <Content>
          <img src={logoImg} alt="logo" />
          <h2>Crie uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala já existente? <Link to="/">Click aqui</Link>
          </p>
        </Content>
      </Main>
    </Container>
  );
};
