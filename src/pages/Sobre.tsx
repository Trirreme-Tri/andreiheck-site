import { perfil } from '../content/profile';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';

export function Sobre() {
  return (
    <div className="page-sobre">
      <h1>Sobre {perfil.nome}</h1>
      <PhotoPlaceholder
        legenda={`Foto de ${perfil.nome}`}
        aspectRatio="3 / 4"
      />
      <p>{perfil.bioCompleta}</p>
      <p>Baseado em {perfil.cidadeBase}.</p>
    </div>
  );
}
