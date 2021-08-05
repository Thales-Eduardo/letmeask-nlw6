import styled, { css } from 'styled-components';

interface Props {
  isHighlighted: boolean;
  isAnswered?: boolean;
}

export const Container = styled.div<Props>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.4);
  padding: 24px;

  & + div {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  ${(props) =>
    props.isHighlighted &&
    !props.isAnswered &&
    css`
      background: #f4f0ff;
      border: 1px solid #835afd;
    `}

  ${(props) =>
    props.isAnswered &&
    css`
      background: #dbdcdd;
    `}
`;

export const Footer = styled.footer<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;

  > div {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: ${(props) => (props.isHighlighted ? '#29292E' : '#737380')};
      font-size: 14px;
    }

    button {
      border: 0;
      background: transparent;
    }

    div {
      display: flex;
      gap: 16px;
    }
  }
`;
