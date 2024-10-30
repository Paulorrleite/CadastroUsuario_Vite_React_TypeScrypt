import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroUsuario from './Paginas/CadastroUsuario';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<CadastroUsuario/>}/>
      </Routes>
    </Router>
  );
}

export default App