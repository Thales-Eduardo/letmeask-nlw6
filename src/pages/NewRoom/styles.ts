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

  background: #835afd;
  color: #fff;

  > img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  > p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
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

  h2 {
    font: 700 24px 'Poppins', sans-serif;
    margin: 64px 0 24px;
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
      background: #fff;
      border: 1px solid #a8a8b3;
    }

    > button {
      display: block;
      margin: 16px auto;
    }
  }

  p {
    font-size: 14px;
    color: #737388;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }
`;
