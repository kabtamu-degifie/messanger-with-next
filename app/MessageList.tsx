"use client";
import Image from "next/image";
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
  const isUser = true;
  console.log(messages);

  return (
    <div className="flex flex-col gap-2 ml-2">
      {messages?.map((message) => {
        return (
          <div key={message.id} className="flex gap-2 max-h-max">
            <div>
              <Image
                src={message.profilePic}
                width={20}
                height={10}
                className="rounded-full "
                alt="Profile pic"
              />
            </div>

            <div className="flex w-fit max-h-max  space-y-2 bg-blue-300 text-white p-2 rounded-md">
              <p>{message.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
