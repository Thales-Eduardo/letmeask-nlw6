import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;

  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.primary10};

  > img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${(props) => props.theme.colors.primary10};
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Main = styled.main`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  width: 100%;
  max-width: 320px;

  > img {
    align-self: center;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.primary10};
    transition: filter 0.2;

    > img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  div {
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary60};
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${(props) => props.theme.colors.primary60};
      margin-right: 16px;
    }
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${(props) => props.theme.colors.primary60};
      margin-left: 16px;
    }
  }

  form {
    > input,
    button {
      width: 100%;
    }

    input {
      height: 50px;
      border-radius: 8px;
      padding: 0px 16px;
      background: ${(props) => props.theme.colors.primary10};
      border: 1px solid ${(props) => props.theme.colors.primary60};
    }

    > button {
      display: block;
      margin: 16px auto;
    }
  }
`;
