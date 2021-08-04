import React from 'react';

import { Container, Footer } from './styles';

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const Question: React.FC<QuestionProps> = ({
  children,
  content,
  author,
}) => {
  return (
    <Container>
      <p>{content}</p>

      <Footer>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </Footer>
    </Container>
  );
};
