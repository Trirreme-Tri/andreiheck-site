import { useEffect } from 'react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface LightboxProps {
  legenda: string;
  onClose: () => void;
}

export function Lightbox({ legenda, onClose }: LightboxProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={legenda}
    >
      <button type="button" className="lightbox-close" onClick={onClose}>
        Fechar
      </button>
      <div className="lightbox-content">
        <PhotoPlaceholder legenda={legenda} aspectRatio="3 / 2" />
      </div>
    </div>
  );
}
