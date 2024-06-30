Configuração e Execução do Projeto de Controle de Estoque (Backend)
Este tutorial guiará você passo a passo na configuração e execução do projeto de Controle de Estoque, focado apenas no backend, tanto via terminal quanto via Docker. Siga atentamente cada etapa para garantir que tudo funcione corretamente.

Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados no seu sistema:

Node.js (versão 14 ou superior)
npm
PostgreSQL
Docker
Git
Clonando o Repositório
Clone o repositório para a sua máquina local:
bash
Copiar código
git clone https://github.com/HigoRafael/controle-estoque.git
cd controle-estoque
Configuração e Execução via Terminal
Backend (NestJS)
Navegue até o diretório do backend:
bash
Copiar código
cd backend
Instale as dependências do projeto:
bash
Copiar código
npm install
Configure o banco de dados PostgreSQL:

Crie um banco de dados no PostgreSQL. Anote o nome do banco, usuário e senha.
Atualize o arquivo ormconfig.json com as informações do seu banco de dados:
json
Copiar código
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "seu_usuario",
  "password": "sua_senha",
  "database": "seu_banco_de_dados",
  "entities": ["dist/**/*.entity.js"],
  "synchronize": true
}
Crie um arquivo .env na raiz do projeto backend com as seguintes variáveis de ambiente:
plaintext
Copiar código
JWT_SECRET=uma_chave_secreta_forte
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco_de_dados
Execute o servidor de desenvolvimento:
bash
Copiar código
npm run start:dev
Configuração e Execução via Docker
Passo 1: Configurar as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

plaintext
Copiar código
JWT_SECRET=uma_chave_secreta_forte
DB_HOST=host.docker.internal
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco_de_dados
Passo 2: Construir e Executar os Contêineres
Certifique-se de estar no diretório raiz do projeto (onde está o arquivo docker-compose.yml):
bash
Copiar código
cd controle-estoque
Construa e execute os contêineres:
bash
Copiar código
docker-compose up --build
Passo 3: Verificar Logs
Você pode verificar os logs do contêiner da aplicação para garantir que tudo está funcionando corretamente:

bash
Copiar código
docker-compose logs app
Conclusão
Agora você deve ter o backend do projeto de Controle de Estoque rodando em sua máquina local. Seja via terminal ou via Docker, siga os passos cuidadosamente para garantir que tudo funcione sem problemas. Se encontrar algum erro, verifique os logs para obter mais detalhes e corrigir qualquer problema de configuração.
