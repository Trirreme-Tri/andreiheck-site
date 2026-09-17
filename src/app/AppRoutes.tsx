import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';
import { Servicos } from '../pages/Servicos';
import { Sobre } from '../pages/Sobre';
import { Blog } from '../pages/Blog';
import { BlogPost } from '../pages/BlogPost';
import { Agenda } from '../pages/Agenda';
import { Contato } from '../pages/Contato';
import { Admin } from '../pages/Admin';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
