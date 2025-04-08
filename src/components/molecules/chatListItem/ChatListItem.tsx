import { getContractedDotSeparatedDate } from '@/utils/dateFormat';
import Image from 'next/image';
interface ChatListItemProps {
  chatRoomId: string;
  recentChatDate: Date;
  text: string;
  userName: string;
  userProfile: string;
  isSelected: boolean;
  onClick: (chatRoomId: string) => void;
}

export default function ChatListItem({
  chatRoomId,
  recentChatDate,
  text,
  userName,
  userProfile,
  isSelected,
  onClick,
}: ChatListItemProps) {
  const styleMap = {
    selected: 'bg-primary0 ',
    unselected: 'bg-black1',
  };
  const style = isSelected ? styleMap.selected : styleMap.unselected;

  return (
    <div
      onClick={() => onClick(chatRoomId)}
      className={`relative w-402 h-fit px-20 py-16 flex gap-8 ${style} `}
    >
      {isSelected && <div className="absolute w-8 h-full bg-primary4 top-0 left-0" />}

      {/* 프로필 이미지*/}
      <Image
        src={userProfile}
        width={40}
        height={40}
        alt="user-profile-image"
        className="rounded-full w-40 h-40"
      />
      <div className="w-full max-w-316">
        {/* 유저 이름과 날짜 */}
        <div className="flex justify-between items-center mb-8">
          <span className="font-semibold text-13 text-black10">{userName}</span>
          <span className="font-regular text-13 text-black7">
            {getContractedDotSeparatedDate(recentChatDate)}
          </span>
        </div>
        {/* 메세지 내용 */}
        <div className="font-regular text-13 text-black8 max-h-32 truncate">{text}</div>
      </div>
    </div>
  );
}
