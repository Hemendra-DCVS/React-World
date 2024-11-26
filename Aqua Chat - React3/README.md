A simple real-time chat application built with React, Firebase Firestore, and Styled-Components. This app allows users to send messages in a single common chat room. The UI is styled using only three colors: white, orange, and light grey/black.

Features
Real-time chat: Messages are sent and received in real-time using Firebase Firestore.
Message alignment: Messages from the sender are aligned to the right, while messages from the receiver are aligned to the left.
Smooth scrolling: Chat window scrolls smoothly to the latest message.
Message input: The user can type and send messages by pressing the Enter key or by clicking the "Send" button.
Responsive design: The chat app is designed to be responsive and looks good on both mobile and desktop screens.
Technologies Used
React: JavaScript library for building user interfaces.
Firebase Firestore: Real-time NoSQL database to store and sync chat messages.
Styled-Components: For styling the components using CSS-in-JS.
Firebase Authentication (optional): Allows you to manage user authentication (though it's not implemented in this version, it can be added later).
Installation
To get started with the project, follow these steps:

1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/chat-app.git
cd chat-app
2. Install dependencies
Make sure you have Node.js installed. Then, run the following command to install the dependencies:

bash
Copy code
npm install
3. Set up Firebase
Create a Firebase project in the Firebase Console.
Add a new Web App to your project and obtain the Firebase configuration credentials.
Replace the firebaseConfig.js file with your own Firebase credentials.
firebaseConfig.js:

javascript
Copy code
// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
4. Run the app
After setting up Firebase, you can run the app in development mode:

bash
Copy code
npm start
This will launch the app in your default web browser at http://localhost:3000.

Folder Structure
bash
Copy code
/chat-app
  /node_modules         # npm packages
  /public               # Public files (index.html, favicon.ico)
  /src
    /components         # All React components (App, Message, Input, etc.)
    /firebaseConfig.js  # Firebase configuration
    /styles.js           # Styled components for UI
  package.json           # npm package file
  .gitignore             # Git ignore file
  README.md              # Project documentation
Usage
Type your message in the input box at the bottom of the screen.
Press Enter or click the Send button to send your message.
Messages will appear in the chat window, alternating between left and right alignment based on whether they are sent or received.
The latest messages will always scroll into view.