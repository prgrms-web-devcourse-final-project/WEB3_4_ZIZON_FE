import ReactDOM from 'react-dom';

interface ModalProps extends React.PropsWithChildren {
  open: boolean;
}

export default function ModalContainer({ open, children }: ModalProps) {
  return ReactDOM.createPortal(
    <>
      {open ? (
        // 모달 컨테이너
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
          {/* 모달 내용 */}
          <div>{children}</div>
        </div>
      ) : null}
    </>,
    document.body,
  );
}
