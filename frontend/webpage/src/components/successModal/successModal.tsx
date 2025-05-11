import { useEffect } from "react";
import "./successModal.css";

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

export const SuccessModal = ({ message, onClose }: SuccessModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // не позволяет закрыть модалку при клике по содержимому
  };

  return (
    <div className="successModalOverlay" onClick={handleOverlayClick}>
      <div className="successModalContent" onClick={handleContentClick}>
        <div className="successMessage">{message}</div>
        <button className="modalCloseButton" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};
