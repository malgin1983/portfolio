import { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal__backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal__box"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <h2 id="modal-title" className="modal__title">
          {title}
        </h2>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}
