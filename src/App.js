import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Inicio } from './components/Inicio';
import { Cadastrar } from './components/Cadastrar';
import { Logar } from './components/Logar';
import { AuthProvinder } from './auth/AuthContext';
import { RotaPrivada } from './auth/RotaPrivada';


const  App = () => {
  return (
    <AuthProvinder>
        <BrowserRouter>
          <RotaPrivada exact path="/" component={Inicio}/>
          <Route exact path="/logar" component={Logar}/>
          <Route exact path="/Cadastrar" component={Cadastrar}/>
        </BrowserRouter>
    </AuthProvinder>
  );
}

export default App;
