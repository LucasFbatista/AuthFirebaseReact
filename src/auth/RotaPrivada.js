import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const RotaPrivada = (props) => {

    const { component: RouteComponent, ...other } = props;
    const { usuario } = useContext(AuthContext);  

    return(
        <Route
            //AQUI EM OTHER SERÁ VERIFICADO SE FOI PASSADO ALGUM OUTRO PARAMETRO DIFERENTE DE UM RouteComponent
            //SERA ELE RECEBEU ELE IRÁ PASSAR ESSAS PROPRIEDADES EXTRAS PARA ESSE COMPONENT ROUTER
            {...other}
            //AQUI ESTAMOS USANDO 2 EXCLAMAÇÕES PORQUE ESTAMOS VERIFICANDO SE O USUÁRIO EXISTE E SE ELE NÃO É NULL 
            render={
                (routeProps) => !! usuario ? ( <RouteComponent {...routeProps}/> ) : ( <Redirect to="/logar" /> )
            }
        />
    );
};