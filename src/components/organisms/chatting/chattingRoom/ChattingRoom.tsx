'use client';

import { useUserData } from '@/hooks/useUserData';
import { Suspense, useEffect, useRef, useState } from 'react';
import MessageTemplate from '@/components/molecules/messageTemplate/MessageTemplate';
import TextInput from '@/components/atoms/inputs/textInput/TextInput';
import StandardButton from '@/components/atoms/buttons/standardButton/StandardButton';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import ChattingList from '../chattingLIst/ChattingList';
import { GetRoomsResponse } from '@/apis/chat/getRooms';
import getChatHistory from '@/apis/chat/getChatHistory';
import FileInput from '@/components/atoms/inputs/fileInput/FileInput';
interface ChattingRoomProps {
  roomId: string | null;
  setRoom: (roomId: string | null) => void;
  setProjectId: (projectId: number | null) => void;
  setExpertId?: (expertId: number | null) => void;
  chatRoomList: GetRoomsResponse;
}

export default function ChattingRoom({
  roomId,
  setRoom,
  setProjectId,
  setExpertId,
  chatRoomList,
}: ChattingRoomProps) {
  //현재 대화방 사용자 정보
  const { memberInfo: currentUser } = useUserData();
  const [senderEmail, receiver] = roomId?.split(':') || []; // sender, receiver
  const receiverEmail = senderEmail === currentUser?.email ? receiver : senderEmail; // 상대방 이메일
  // 채팅방 관련 변수
  const [messages, setMessages] = useState<any[]>([]); // 메시지 상태 관리
  const [input, setInput] = useState<string>(''); // 입력 상태 관리
  const messagesEndRef = useRef<HTMLDivElement>(null); // 스크롤을 위한 ref
  const [isLoadingHis, setIsLoadingHis] = useState(false); // 로딩 상태 관리

  // WebSocket 관련 참조
  const stompClientRef = useRef<any>(null);
  const chatSubscriptionRef = useRef<any>(null);
  const readSubscriptionRef = useRef<any>(null);

  // 1. 채팅방 메세지 내역 로딩 (리팩토링)
  const fetchChatHistory = async (roomId: string) => {
    if (!currentUser) return;
    const sender = currentUser.email;
    const parts = roomId.split(':');
    const receiver = parts[0] === sender ? parts[1] : parts[0];
    try {
      const response = await getChatHistory(roomId);

      setMessages(response);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  // WebSocket 연결 함수
  const connectWebSocket = () => {
    const socket = new SockJS('http://localhost:8080/ws-chat');
    const stompClient = Stomp.over(socket);
    stompClient.debug = (str: string) => {
      //console.log('🐛 STOMP Debug:', str);
    };
    stompClient.connect(
      {},
      (frame: any) => {
        //console.log('STOMP 연결 성공', frame);
        stompClient.subscribe(`/topic/notice/${currentUser.email}`, (messageOutput: any) => {
          const payload = JSON.parse(messageOutput.body);
          //console.log('Received message:', messageOutput);
          const roomId = payload.roomId;
          const otherUser = payload.otherUser || 'otheruser undefined';
          const alarmMessage = payload.message || 'message undefined';
          // alarm 기능 추가가능
        });
      },
      (error: any) => {
        console.error('STOMP 연결 실패', error);
      },
    );
    stompClientRef.current = stompClient;
  };

  // 채팅 메시지 추가 (실시간 수신 메시지)
  const addMessage = (message: any) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };
  // 메세지가 추가될 때 스크롤을 항상 아래로 이동
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 채팅방 변경 시 처리
  const handleRoomChange = (room: string, projectId: number, userId: number, receiver: string) => {
    // 이전 구독 해제
    if (chatSubscriptionRef.current) {
      chatSubscriptionRef.current.unsubscribe();
      chatSubscriptionRef.current = null;
    }
    if (readSubscriptionRef.current) {
      readSubscriptionRef.current.unsubscribe();
      readSubscriptionRef.current = null;
    }
    setRoom(room);
    setProjectId(projectId);
    setExpertId && setExpertId(userId);
    fetchChatHistory(room); // 채팅 내역 로딩

    // 채팅방 메세지 구독
    if (stompClientRef.current) {
      chatSubscriptionRef.current = stompClientRef.current.subscribe(
        `/topic/chat/${room}`,
        (messageOutput: any) => {
          const msg = JSON.parse(messageOutput.body);
          addMessage(msg);
        },
      );
    }
  };

  // 메시지 전송 함수
  const sendMessage = () => {
    if (!roomId) {
      alert('채팅방을 선택하세요.');
      return;
    }
    const text = input.trim();
    //const fileUrl = hiddenFileUrl;
    if (!text) {
      alert('메시지 내용 또는 이미지를 선택하세요.');
      return;
    }
    if (!currentUser) return;
    const chatMessage = {
      sender: currentUser.email,
      receiver: receiverEmail,
      content: text,
      fileUrl: null,
    };
    //console.log('[sendMessage] Sending chatMessage:', chatMessage);
    if (stompClientRef.current) {
      stompClientRef.current.send('/app/chat.send', {}, JSON.stringify(chatMessage));
    }
    setInput('');
    //setHiddenFileUrl('');
  };
  useEffect(() => {
    if (currentUser) {
      connectWebSocket();
    }
  }, [roomId, currentUser]);

  return (
    <div className="flex gap-24 items-start">
      <Suspense>
        <ChattingList
          chatRoomList={chatRoomList}
          handleRoomChange={handleRoomChange}
          room={roomId}
        />
      </Suspense>
      <div className="w-full flex-col min-w-690 max-w-828">
        {/* 채팅화면 */}
        <div className="w-full flex flex-col gap-32 bg-black1 px-32 py-32 rounded-[8px] h-745 overflow-y-scroll mb-16">
          {messages &&
            messages.map(message => (
              <MessageTemplate
                key={`${message.timestamp}-${message.content}`}
                dateTime={new Date(message.timestamp)}
                message={message.content}
                tag={message.sender === currentUser.email ? 'get' : 'send'}
              />
            ))}
          <div ref={messagesEndRef} />
        </div>
        {/* 채팅입력 */}
        <div className="w-full flex flex-col gap-10">
          <TextInput
            value={input}
            onChange={(value: string) => setInput(value)}
            placeholder="메시지를 입력해주세요. (Enter: 줄바꿈 / Ctrl+Enter: 전송)"
            id="chatting-input"
            type="text"
            disabled={false}
            color="white"
          />

          {/* 채팅 전송 */}
          <div className="flex justify-between items-center">
            <FileInput
              label="첨부파일"
              name="file-input"
              accept="image/*, .pdf, .docx"
              onChange={(file: File) => {
                // setFile(file);
                // //console.log('첨부파일:', file);
              }}
            />
            <StandardButton
              text="전송"
              state="dark"
              disabled={false}
              onClick={() => {
                // 메시지 전송 로직
                sendMessage();
                setInput(''); // 전송 후 입력창 초기화
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
