import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { Button } from '../../components/Button';

import { useRoom } from '../../hooks/Room';

import { database } from '../../services/firebase';

import {
  Container,
  Header,
  Main,
  Content,
  DeleteButton,
  CheckButton,
  AnswerButton,
} from './styles';

interface ParamesProps {
  id: string;
}

export const AdminRoom: React.FC = () => {
  const params = useParams<ParamesProps>();
  const history = useHistory();

  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    history.push('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlighQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </Header>
      <Main>
        <div>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
      </Main>

      <Content>
        {questions.map((question) => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
            isHighlighted={question.isHighlighted}
            isAnswered={question.isAnswered}
          >
            {!question.isAnswered && (
              <>
                <CheckButton
                  type="button"
                  onClick={() => handleCheckQuestionAsAnswered(question.id)}
                >
                  <img src={checkImg} alt="marcar pergunta como respondida" />
                </CheckButton>

                <AnswerButton
                  type="button"
                  onClick={() => handleHighlighQuestion(question.id)}
                >
                  <img src={answerImg} alt="destacar pergunta" />
                </AnswerButton>
              </>
            )}

            <DeleteButton
              type="button"
              onClick={() => handleDeleteQuestion(question.id)}
            >
              <img src={deleteImg} alt="Remover pergunta" />
            </DeleteButton>
          </Question>
        ))}
      </Content>
    </Container>
  );
};
