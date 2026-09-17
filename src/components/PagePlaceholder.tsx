interface PagePlaceholderProps {
  title: string;
}

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>Em construção</p>
    </section>
  );
}
