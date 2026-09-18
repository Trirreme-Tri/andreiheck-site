import { perfil } from '../content/profile';
import { WhatsAppLink } from './WhatsAppLink';

export function Footer() {
  return (
    <footer className="site-footer">
      <WhatsAppLink mensagem="Olá! Vim pelo site e gostaria de um orçamento.">
        Falar no WhatsApp
      </WhatsAppLink>
      <nav aria-label="Redes sociais">
        <a href={perfil.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={perfil.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
      </nav>
      <p className="site-footer-note">
        {perfil.nome} · {perfil.cidadeBase} · site de demonstração
      </p>
    </footer>
  );
}
