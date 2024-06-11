import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 6vh 16vw;
`;

export const TileContainer = styled.div`
  position: relative;
  margin: 15px;
  cursor: pointer;
  overflow: hidden;
  width: 18vw;
  height: 18vw;
  position: relative;

  img {
    width: 100%;
    transition: transform 500ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  div {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    opacity: 0; /* Initially hidden */
    transition: opacity 300ms ease;

    button {
      background-color: #007bff;
      color: #fff;
      padding: 5px;
      cursor: pointer;
      margin-right: 5px;
    }
  }

  &:hover div {
    opacity: 1; /* Show buttons on hover */
  }
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: auto;
  width: 250px;
  height: 225px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
  }

  button {
    width: 100%;
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem;
    font-size: 1.035rem;
    cursor: pointer;
  }
`;

