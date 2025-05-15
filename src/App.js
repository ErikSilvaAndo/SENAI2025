import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from "./componentes/pages/Login";
import Registrar from "./componentes/pages/Registrar";
import Dashboard from "./componentes/pages/Dashboard";
import AdicionarMovimentacao from './componentes/pages/Movimentacoes/Adicionar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/registrar" element={<Registrar/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/addmovimentacao" element={<AdicionarMovimentacao/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
