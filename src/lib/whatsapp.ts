export function buildWhatsAppLink(whatsapp: string, mensagem?: string): string {
  const base = `https://wa.me/${whatsapp}`;
  if (!mensagem) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}
