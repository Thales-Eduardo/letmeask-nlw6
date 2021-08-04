import styled, { css } from 'styled-components';

interface Props {
  isOutlined: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  transition: filter 0.2;
  padding: 0 32px;

  > img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) =>
    props.isOutlined &&
    css`
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    `}
`;
