import React from 'react';

import { Container, Footer } from './styles';

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted?: boolean;
  isAnswered?: boolean;
}

export const Question: React.FC<QuestionProps> = ({
  children,
  content,
  isHighlighted = false,
  isAnswered = false,
  author,
}) => {
  return (
    <Container isHighlighted={isHighlighted} isAnswered={isAnswered}>
      <p>{content}</p>

      <Footer isHighlighted={isHighlighted}>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </Footer>
    </Container>
  );
};
