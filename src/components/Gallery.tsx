import { useState } from 'react';
import type { Foto } from '../content/types';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { Lightbox } from './Lightbox';

interface GalleryProps {
  fotos: Foto[];
}

export function Gallery({ fotos }: GalleryProps) {
  const [selecionada, setSelecionada] = useState<Foto | null>(null);

  return (
    <>
      <div className="gallery">
        {fotos.map((foto) => (
          <button
            key={foto.id}
            type="button"
            className="gallery-item"
            onClick={() => {
              setSelecionada(foto);
            }}
          >
            <PhotoPlaceholder legenda={foto.legenda} />
          </button>
        ))}
      </div>
      {selecionada ? (
        <Lightbox
          legenda={selecionada.legenda}
          onClose={() => {
            setSelecionada(null);
          }}
        />
      ) : null}
    </>
  );
}
