"use client";
import React, { FormEvent } from "react";

function ChatInput() {
  const [input, setInput] = React.useState("");

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const messageToSend = input;
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
