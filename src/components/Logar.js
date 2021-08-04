import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { authConfig } from '../auth/config';
import { AuthContext } from '../auth/AuthContext';

export const Logar = withRouter((props) => {

    //AQUI ESTAMOS PEGANDO O HISTORICO DA NOSSAS ROTAS
    const { history } = props;

    const loginFunc = useCallback(

        async(event) => {
            event.preventDefault();

            const { email, senha } = event.target.elements;

            try{

                await authConfig.auth().signInWithEmailAndPassword(email.value, senha.value)
                history.push('/')

            }catch(error){
                console.log(error)
            }
        },
        //ESTAMOS USANDO A FUNÇÃO CADASTROFUNC PASSANDO O history COMO PARAMETRO CASO ELE MUDE
        //OU TENHA QUALQUER ALTERAÇÃO A FUNÇÃO SERÁ EXECUTADA NOVAMENTE
        [history],
    );

    const { usuario } = useContext(AuthContext)

    if(usuario){
        return <Redirect to="/" />;
    }


    return(
        <div>
            <h1>Logar</h1>
            <form onSubmit={loginFunc}>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Senha</label>
                <input type="password" name="senha"/>
                <button type="submit">Logar!</button>
            </form>
        </div>
    )
});