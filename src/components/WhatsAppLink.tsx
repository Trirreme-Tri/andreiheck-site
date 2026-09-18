import { perfil } from '../content/profile';
import { buildWhatsAppLink } from '../lib/whatsapp';

interface WhatsAppLinkProps {
  mensagem?: string;
  children: string;
  className?: string;
}

export function WhatsAppLink({
  mensagem,
  children,
  className,
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppLink(perfil.whatsapp, mensagem)}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
