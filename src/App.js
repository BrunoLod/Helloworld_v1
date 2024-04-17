import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';
import ScrollToTop from './componentes/ScrollToTop';
import NaoEncontrada from './pages/NaoEncontrada';
import Post from './pages/Post';
import Inicio from './pages/inicio';
import SobreMim from './pages/sobreMim';



/*

    A tag BrowserRouter permite a navegação entre diferentes páginas da aplicação.
    Fornece a infraestrutura necessária para gerenciar o histórico de navegação do
    usuário, atualizar o URL do navegador e renderizar o componente correto de acordo
    com a rota atual.

    A tag Routes se refere ao container que irá abrigar as rotas de navegação
    da aplicação, de modo que o Route são as rotas propriamente ditas, que fornecem
    o caminho e o elemento que será renderizado.

    Uma observação é que o "*" utilizado é um recurso que significa que
    para qualquer caminho que não aqueles apreciados pela aplicação, isto é,
    para todo caminho que nela não está presente ele enviará o usuário a uma
    página de erro, conhecido, no caso, como 404, informando que a página
    não fora encontrada.

    */


function App() {
  return (
    
    <BrowserRouter>

      <ScrollToTop/>
      <Menu/>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="/posts/:id" element={<Post />} />
        
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape/>

    </BrowserRouter>
  );
}

export default App;
