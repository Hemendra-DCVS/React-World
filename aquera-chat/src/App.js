import React, { useState, useEffect, useRef } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import {
  AppContainer,
  ChatBox,
  Message,
  InputContainer,
  Input,
  Button,
} from "./chatSyles";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        sender: "User", // Replace with actual user data if authentication is added
        timestamp: new Date(),
      });
      setNewMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <AppContainer>
      <ChatBox>
        {messages.map((msg, index) => (
          <Message
            key={msg.id}
            isSender={index % 2 === 0} // Alternating alignment
          >
            {msg.text}
          </Message>
        ))}
        <div ref={chatEndRef} />
      </ChatBox>
      <InputContainer>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSend}>Send</Button>
      </InputContainer>
    </AppContainer>
  );
}

export default App;
