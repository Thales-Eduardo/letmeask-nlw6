import styled, { css } from 'styled-components';

interface Props {
  islike: boolean;
}

export const Container = styled.div`
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary70};

  div {
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
      gap: 16px;
    }
  }
  @media (max-width: 400px) {
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
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

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: ${(props) => props.theme.colors.primary20};
      box-shadow: 0px 2px 12px ${(props) => props.theme.colors.shadow};
      resize: vertical;
      min-height: 130px;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      span {
        font-size: 14px;
        color: ${(props) => props.theme.colors.primary50};

        button {
          background: transparent;
          border: 0;
          color: ${(props) => props.theme.colors.secundary};
          text-decoration: underline;
          font-size: 14px;
          font-weight: 500;
        }
      }

      > div {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
          color: ${(props) => props.theme.colors.primary50};
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 32px auto;
`;

export const LikeButton = styled.button<Props>`
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.primary50};
  gap: 5px;
  transition: filter 0.3;

  ${(props) =>
    props.islike &&
    css`
      color: ${(props) => props.theme.colors.secundary};
      svg path {
        stroke: ${(props) => props.theme.colors.secundary};
      }
    `}

  &:hover {
    filter: brightness(0.8);
  }
`;
