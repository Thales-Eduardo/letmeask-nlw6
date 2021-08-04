import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

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
      color: #737380;
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
