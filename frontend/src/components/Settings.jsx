// // src/components/Settings.js
// import React, { useState, useEffect } from 'react';
// import { Button, Form, Card, Container } from 'react-bootstrap';

// const Settings = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [settings, setSettings] = useState({
//     notifications: true,
//     profileVisibility: 'public',
//     password: '',
//   });

//   useEffect(() => {
//     // Apply dark mode class to body
//     if (darkMode) {
//       document.body.classList.add('bg-dark', 'text-light');
//     } else {
//       document.body.classList.remove('bg-dark', 'text-light');
//     }
//   }, [darkMode]);

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setSettings({
//       ...settings,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSaveSettings = () => {
//     console.log('Settings saved:', settings);
//     // Save settings to the database or local storage here
//   };

//   return (
//     <Container className="mt-4">
//       <h3>Settings</h3>
      
//       {/* Dark Mode Toggle */}
//       <Card className="mb-3">
//         <Card.Body>
//           <Card.Title>Appearance</Card.Title>
//           <Form.Check
//             type="switch"
//             id="dark-mode-switch"
//             label="Dark Mode"
//             checked={darkMode}
//             onChange={handleDarkModeToggle}
//           />
//         </Card.Body>
//       </Card>

//       {/* Profile Settings */}
//       <Card className="mb-3">
//         <Card.Body>
//           <Card.Title>Profile Settings</Card.Title>
//           <Form.Group controlId="profileVisibility">
//             <Form.Label>Profile Visibility</Form.Label>
//             <Form.Control
//               as="select"
//               name="profileVisibility"
//               value={settings.profileVisibility}
//               onChange={handleChange}
//             >
//               <option value="public">Public</option>
//               <option value="private">Private</option>
//               <option value="friends">Friends Only</option>
//             </Form.Control>
//           </Form.Group>
//         </Card.Body>
//       </Card>

//       {/* Notifications */}
//       <Card className="mb-3">
//         <Card.Body>
//           <Card.Title>Notifications</Card.Title>
//           <Form.Check
//             type="checkbox"
//             id="notifications"
//             label="Enable Email Notifications"
//             name="notifications"
//             checked={settings.notifications}
//             onChange={handleChange}
//           />
//         </Card.Body>
//       </Card>

//       {/* Change Password */}
//       <Card className="mb-3">
//         <Card.Body>
//           <Card.Title>Change Password</Card.Title>
//           <Form.Group controlId="password">
//             <Form.Label>New Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter new password"
//               name="password"
//               value={settings.password}
//               onChange={handleChange}
//             />
//           </Form.Group>
//         </Card.Body>
//       </Card>

//       {/* Save Button */}
//       <Button variant="primary" onClick={handleSaveSettings}>
//         Save Settings
//       </Button>
//     </Container>
//   );
// };

// export default Settings;






// import React, { useState, useRef, useEffect } from "react";
// import { Form, Button } from "react-bootstrap";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! How can I assist you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     // Auto-scroll to the latest message
//     chatContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     // Simulate bot response (replace this with an API call)
//     setTimeout(() => {
//       const botResponse = { sender: "bot", text: "I'm here to help! Ask me anything." };
//       setMessages((prev) => [...prev, botResponse]);
//     }, 1000);
//   };

//   return (
//     <div className="chatbot-container">
//       {/* Chat Header */}
//       <div className="chat-header">Chatbot</div>

//       {/* Chat Messages */}
//       <div className="chat-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         <div ref={chatContainerRef}></div>
//       </div>

//       {/* Input Field */}
//       <div className="chat-input">
//         <Form.Control
//           type="text"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//         />
//         <Button variant="primary" onClick={handleSendMessage}>
//           Send
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

















// import React, { useState, useRef, useEffect } from "react";
// import { Form, Button } from "react-bootstrap";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! How can I assist you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     chatContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const botResponse = await fetchChatbotResponse(input);
//       setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
//     } catch (error) {
//       setMessages((prev) => [...prev, { sender: "bot", text: "Error: Unable to fetch response." }]);
//     }
//   };

//   const fetchChatbotResponse = async (userInput) => {
//     const API_KEY = 'AIzaSyC647nXFOMQNfgOzlC46zMr1-mXmPSoqTc';
//     const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         contents: [{ parts: [{ text: userInput }] }]
//       }),
//     });

//     const data = await response.json();
//     return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-header">Chatbot</div>
//       <div className="chat-messages">
//         {messages.map((msg, index) => (
//           <div key={index} className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}>
//             {msg.text}
//           </div>
//         ))}
//         <div ref={chatContainerRef}></div>
//       </div>
//       <div className="chat-input">
//         <Form.Control
//           type="text"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//         />
//         <Button variant="primary" onClick={handleSendMessage}>Send</Button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const botResponse = await fetchChatbotResponse(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error: Unable to fetch response." }]);
    }
  };

  const fetchChatbotResponse = async (userInput) => {
    const API_KEY = 'AIzaSyC647nXFOMQNfgOzlC46zMr1-mXmPSoqTc';
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userInput }] }]
      }),
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        <div className="chat-header">Chatbot</div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatContainerRef}></div>
        </div>
        <div className="chat-input">
          <Form.Control
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button variant="primary" onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
