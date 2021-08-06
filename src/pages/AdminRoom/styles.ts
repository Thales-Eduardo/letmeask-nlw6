import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary70};

  > div {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 16px;

      button {
        height: 40px;
      }
    }
  }
  @media (max-width: 400px) {
    > div {
      gap: 10px;
      display: flex;
      flex-direction: column;
      > div {
        flex-direction: column;
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  > div {
    margin: 32px 0px 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: ${(props) => props.theme.colors.primary80};
    }

    span {
      margin-left: 16px;
      background-color: ${(props) => props.theme.colors.pink};
      border-radius: 9999px;
      padding: 8px 16px;
      color: ${(props) => props.theme.colors.primary10};
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 32px auto;
`;

export const DeleteButton = styled.button``;

export const CheckButton = styled.button``;

export const AnswerButton = styled.button``;
