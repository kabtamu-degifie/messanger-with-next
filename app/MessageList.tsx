"use client";
import React from "react";
import useSRW from "swr";
import { Message } from "../typing";
import fetcher from "../utils/fetchMessages";

export default function MessageList() {
  const {
    data: messages,
    error,
    mutate,
  } = useSRW<Message[]>("/api/getMessages", fetcher);
  console.log(messages);

  return (
    <div>
      {messages?.map((message) => {
        return (
          <div key={message.id}>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div>
  );
}
