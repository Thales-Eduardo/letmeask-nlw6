import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import illustration from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIcon from '../../assets/images/google-icon.svg';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/Auth';

import { database } from '../../services/firebase';

import { Container, Aside, Main, Content } from './styles';

export const Home: React.FC = () => {
  const [roomCode, setRoomCode] = useState('');
  const history = useHistory();
  const { user, singIn } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await singIn();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed');
      return;
    }

    history.push(`rooms/${roomCode}`);
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

          <button onClick={handleCreateRoom}>
            <img src={googleIcon} alt="log do button" />
            Crie sua sala com o Google
          </button>

          <div>Uo entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </Content>
      </Main>
    </Container>
  );
};
