"use client";
import React, { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typing";

function ChatInput() {
  const [input, setInput] = React.useState("");

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const messageToSend = input;
    const id = uuid();
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Kabtamu",
      email: "habtamu.admas12@gmail.com",
      profilePic:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    };

    const uploadMessageToUpstash = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      console.log("added message>>", data);
    };
    uploadMessageToUpstash();
    setInput("");
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex space-x-2 p-10 fixed bottom-0 w-full border-t border-t-gray-100"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border flex-1 outline-none rounded focus:ring-2 focus:ring-blue-500"
      />
      <button
        disabled={!input}
        className="py-2 px-3 rounded-md bg-blue-500 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
