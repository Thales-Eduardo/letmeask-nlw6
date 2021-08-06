import styled, { css } from 'styled-components';

interface Props {
  isHighlighted: boolean;
  isAnswered?: boolean;
}

export const Container = styled.div<Props>`
  background: ${(props) => props.theme.colors.primary20};
  border-radius: 8px;
  box-shadow: 0px 2px 12px ${(props) => props.theme.colors.shadow};
  padding: 24px;

  & + div {
    margin-top: 8px;
  }

  p {
    color: ${(props) => props.theme.colors.primary80};
  }

  ${(props) =>
    props.isHighlighted &&
    !props.isAnswered &&
    css`
      background: ${(props) => props.theme.colors.primary30};
      border: 1px solid ${(props) => props.theme.colors.secundary};
    `}

  ${(props) =>
    props.isAnswered &&
    css`
      background: ${(props) => props.theme.colors.primary40};
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
      color: ${(props) =>
        props.isHighlighted
          ? props.theme.colors.primary80
          : props.theme.colors.primary50};
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
