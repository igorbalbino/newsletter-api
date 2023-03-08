import { Request, Response, Router } from 'express';
import UserController from './controller/UserController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    console.log('Olá Mundo!');
    return response.status(200).send({
        message: 'Olá Mundo! Está API possui um pequeno tutorial elaborado em sua página do github: LINK_AQUI. ' +
        'Porém como já estamos aqui, vamos apresentar um pouco sobre as rotas e o funcionamento da API. ' +
        '    |   ' +
        'Rota /' +
        '    ' +
        'Retorna um pequeno tutorial de como funciona.' +
        '    |   ' +
        'Rota /register' +
        '    ' +
        'Rota para cadastrar a organização ou website que está usando. Deve conter os parâmetros de cadastro: ' + 
        'nome da pessoa, nome da organização, email da organização, usuário, senha' +
        '    |   ' +
        'Rota /login' +
        '    ' +
        'Rota para fazer login na API. Vc recebe um token que será validado de tempos em tempos até expirar. ' + 
        'Tempo máximo de 24h. Deve conter os parâmetros de login: usuário, senha' +
        '    |   ' +
        'Rota /add' +
        '    ' +
        'Rota para adicionar novos emails para a lista de newsletter. Deve conter os parâmetros de adição: ' + 
        'nome do dono, email, status ativo' +
        '    |   ' +
        'Rota /remove' +
        '    ' +
        'Rota para remover um registro do banco. Deve conter os parâmetros de remoção: nome do dono ou email' +
        '    |   ' +
        'Rota /list' +
        '    ' +
        'Rota que lista todos os emails para o usuário logado. Deve conter os parâmetros de listagem: ' + 
        'usuario ou token (automatico) No caso do token, a API pega automaticamente e já te traz a lista. ' + 
        'Caso esteja deslogado e dispare a rota, terá de informar o usuário. Apenas o usuário.'
    });
});

routes.post('/register', UserController.register);

export default routes;