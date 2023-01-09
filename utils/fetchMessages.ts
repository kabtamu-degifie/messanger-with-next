import { Message } from "../typing";

const fetcher = async () => {
  const res = fetch("/api/getMessages");
  const data = await (await res).json();
  const messages: Message[] = data.messages;
  return messages;
};

export default fetcher;
