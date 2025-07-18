// const { authenticate } = require("../controllers/docenteController");

const auth = {
    authenticate: (usuario, senha) => {
        /** TODO:
         * Implementar alguma verificação por hash usando bcrypt:
         * Preicsa modificar o DB para armazenar o hash da senha ao invez da senha;
         * Verificar se a senha esta correta usando o bycript;
         * Gerar um token da sessão com validade de X dias usando JWT (jsonwebtoken)
         * Retornar esse token para a view;
         * Este token deverá ser armazenado pelo front-end no navegador do usuario;
         * Toda requisição deverá enviar este token;
         * Através desse token, validar as permissões e 
         *   aceitar ou recusar a requisição; */
        if (usuario.senha === senha)
            return usuario;
        return null;
    }
}

module.exports = auth;