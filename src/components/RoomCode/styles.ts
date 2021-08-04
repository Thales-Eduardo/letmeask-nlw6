import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835afd;

  display: flex;
  transition: filter 0.8;

  &:active {
    filter: brightness(0.9);
  }

  > div {
    background: #835afd;
    padding: 0px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  > span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0px 16px 0px 12px;
    width: 210px;
    font-size: 14px;
    font-weight: 500;
  }
`;
