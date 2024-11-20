import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #f7f7f7;
  font-family: Arial, sans-serif;
`;

export const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  scroll-behavior: smooth;
`;

export const Message = styled.div`
  padding: 0.5rem 1rem;
  margin: 0.5rem auto; /* Centers messages horizontally */
  background: ${(props) => (props.isSender ? "#DCF8C6" : "#FFFFFF")};
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  border-radius: 10px;
  max-width: 60%; /* Keeps the messages compact */
  width: calc(60% - 40%); /* Ensures the 20% padding on both sides */
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  text-align: ${(props) => (props.isSender ? "right" : "left")};
  position: relative;
  margin-left: 20%; /* Adds 20% space on the left */
  margin-right: 20%; /* Adds 20% space on the right */
`;



export const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  background: white;
  border-top: 1px solid #ddd;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
