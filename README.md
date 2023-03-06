# API NodeJS para Salvar Nesletter

### Dependências

<ul style="display: flex; flex-direction: row; justify-content: space-evenly;">
  <li>typescript</li>
  <li>ts-node-dev</li>
  <li>express</li>
  <li>@types/express (desenvolvimento)</li>
</ul>

### Funcionalidade

Possui 6 rotas:

#### Rota ``/``

Retorna um pequeno tutorial de como funciona.

#### Rota ``/register``

Rota para cadastrar a organização ou website que está usando.
Deve conter os parâmetros de cadastro: ``nome da pessoa, nome da organização, email da organização, usuário, senha``

#### Rota ``/login``

Rota para fazer login na API. Vc recebe um token que será validado de tempos em tempos até expirar. Tempo máximo de 24h.
Deve conter os parâmetros de login: ``usuário, senha``

#### Rota ``/add``

Rota para adicionar novos emails para a lista de newsletter.
Deve conter os parâmetros de adição: ``nome do dono, email, status ativo``

#### Rota ``/remove``

Rota para remover um registro do banco.
Deve conter os parâmetros de remoção: ``nome do dono ou email``
Tenha em mente que essa rota removerá qualquer ocorrência dos parâmetros passados. Se remover por nome e houverem 2 registros de "Fulado de Tal", com emails diferentes como ``{"nome": "Fulado de Tal", "email","email1@email.com"}`` e ``{"nome": "Fulado de Tal", "email","email2@email.com"}``, ambos serão removidos. 

#### Rota ``/list``

Rota que lista todos os emails para o usuário logado.
Deve conter os parâmetros de listagem: ``usuario ou token (automatico)``
No caso do token, a API pega automaticamente e já te traz a lista. Caso esteja deslogado e dispare a rota, terá de informar o usuário. Apenas o usuário.
