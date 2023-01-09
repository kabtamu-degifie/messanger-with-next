import React from "react";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

function Homepage() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}

export default Homepage;
