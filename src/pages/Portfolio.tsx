import { fotos } from '../content/photos';
import { videos } from '../content/videos';
import { Gallery } from '../components/Gallery';
import { Section } from '../components/Section';

const casamentos = fotos.filter((foto) => foto.categoria === 'casamento');
const ensaios = fotos.filter((foto) => foto.categoria === 'ensaio');

export function Portfolio() {
  return (
    <div className="page-portfolio">
      <h1>Portfólio</h1>

      <Section title="Casamentos">
        <Gallery fotos={casamentos} />
      </Section>

      <Section title="Ensaios">
        <Gallery fotos={ensaios} />
      </Section>

      <Section title="Vídeos">
        <ul className="video-list">
          {videos.map((video) => (
            <li key={video.id}>
              <a href={video.link} target="_blank" rel="noreferrer">
                {video.titulo}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
