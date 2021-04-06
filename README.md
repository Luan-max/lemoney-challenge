# Desafio Lemoney

- O desenvolvimento da api foi baseado no conceito da arquitetura limpa (Clean Architecture), separando à
  regra de negócio de funções e conexões com o banco de dados, temos as services que faz toda orquestração e
  conexão com os respositórios que se comunicam com o banco, as controllers para cuidar da parte de comunição
  com o usuário, recebendo requisições e enviando respostas.

# Iniciar a aplicação

    A aplicação foi desenvolvida através de container para uma administração de processamento melhor. Então para você executar, bastar ter na sua máquina o Docker instalado.

- Comando para rodar a aplicação: docker-compose up ou docker-compose up -d para rodar em background.

# Rotas

## Advertisers

    Method: POST
    url: http://localhost:3333/api/v1/advertisers \
        --header 'Content-Type: application/json' \
        --data '{
            "name": "Walmart"
            "email": "walmart@teste.com.br,

        }'
