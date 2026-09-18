import { Link } from 'react-router-dom';
import { perfil } from '../content/profile';
import { fotos } from '../content/photos';
import { depoimentos } from '../content/testimonials';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { Section } from '../components/Section';
import { TestimonialCard } from '../components/TestimonialCard';
import { WhatsAppLink } from '../components/WhatsAppLink';

const destaques = fotos.filter((foto) => foto.destaque);

export function Home() {
  return (
    <div className="page-home">
      <section className="hero">
        <PhotoPlaceholder legenda={perfil.fraseImpacto} aspectRatio="16 / 9" />
        <h1>{perfil.fraseImpacto}</h1>
        <WhatsAppLink
          mensagem="Olá! Vim pelo site e gostaria de um orçamento."
          className="button-primary"
        >
          Pedir orçamento
        </WhatsAppLink>
      </section>

      <Section eyebrow="Sobre" title={perfil.nome}>
        <p>{perfil.bioCurta}</p>
        <Link to="/sobre">Conhecer a história</Link>
      </Section>

      <Section eyebrow="Portfólio" title="Destaques">
        <div className="gallery">
          {destaques.map((foto) => (
            <PhotoPlaceholder key={foto.id} legenda={foto.legenda} />
          ))}
        </div>
        <Link to="/portfolio">Ver portfólio completo</Link>
      </Section>

      <Section eyebrow="Depoimentos" title="Quem já viveu essa experiência">
        <div className="testimonials">
          {depoimentos.map((depoimento) => (
            <TestimonialCard key={depoimento.id} depoimento={depoimento} />
          ))}
        </div>
      </Section>

      <section className="cta-final">
        <h2>Vamos contar a sua história?</h2>
        <WhatsAppLink
          mensagem="Olá! Vim pelo site e gostaria de um orçamento."
          className="button-primary"
        >
          Falar no WhatsApp
        </WhatsAppLink>
      </section>
    </div>
  );
}
