interface PhotoPlaceholderProps {
  legenda: string;
  aspectRatio?: string;
}

export function PhotoPlaceholder({
  legenda,
  aspectRatio = '4 / 3',
}: PhotoPlaceholderProps) {
  return (
    <figure className="photo-placeholder" style={{ aspectRatio }}>
      <span aria-hidden="true">📷</span>
      <figcaption>{legenda}</figcaption>
    </figure>
  );
}
