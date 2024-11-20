import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #f7f7f7; /* Light grey background for the entire app */
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
  background: #ffffff; /* White background for the chat area */
`;

export const Message = styled.div`
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  background: ${(props) => (props.isSender ? "#f5a623" : "#f7f7f7")}; /* Orange for sender, light grey for receiver */
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
  color: ${(props) => (props.isSender ? "#ffffff" : "#333333")}; /* White text for orange background, dark grey for light grey */
  border-radius: 10px;
  max-width: 60%;
  width: calc(60% - 40%);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  text-align: ${(props) => (props.isSender ? "right" : "left")};
  margin-left: 20%;
  margin-right: 20%;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  background: #ffffff; /* White background for input area */
  border-top: 1px solid #ddd; /* Light grey border on top */
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 0.5rem;
  color: #333333; /* Dark grey text */
  background: #f7f7f7; /* Light grey input background */
`;

export const Button = styled.button`
  background: #f5a623; /* Orange for button */
  color: #ffffff; /* White text for button */
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #e5951d; /* Slightly darker orange for hover state */
  }
`;
