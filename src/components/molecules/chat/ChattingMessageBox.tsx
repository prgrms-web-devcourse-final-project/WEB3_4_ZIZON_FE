'use client';

import { M } from 'vitest/dist/chunks/environment.d.C8UItCbf.js';
import MessageTemplate from '../messageTemplate/MessageTemplate';
import { MessageType } from '@/apis/chat/getChatHistory';
interface ChattingMessageBoxProps {
  messageList: MessageType[];
  senderEmail: string;
}
export default function ChattingMessageBox({ messageList, senderEmail }: ChattingMessageBoxProps) {
  return (
    <div className="w-full flex flex-col gap-32 bg-black1 px-32 py-32 rounded-[8px] h-745 overflow-y-scroll mb-16">
      {messageList &&
        messageList.map(message => (
          <MessageTemplate
            key={message.timestamp}
            dateTime={new Date(message.timestamp)}
            message={message.content}
            tag={message.sender === senderEmail ? 'send' : 'get'}
          />
        ))}
    </div>
  );
}
