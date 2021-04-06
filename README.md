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
    url: http://localhost:3333/advertisers \
    header: 'Content-Type: application/json' \
    data: {
        "name": "Walmart"
        "email": "walmart@teste.com.br,
        "password": 4669
    }'

    Method: GET
    url: http://localhost:3333/advertisers \
    header: 'Content-Type: application/json' \
    data: {}'

## Offers

    Method: POST
    url: http://localhost:3333/advertiser/:advertiser_id/offers \
    header: 'Content-Type: application/json' \
    data: {
        "advertiser_name": "Walmart",
        "url": "url do produto",
        "description": "Descrição",
        "startAt": "2021-11-02 12:12:22",
        "endsAt": "2021-11-02 12:12:22",
        "state": "false",
        "premium": "false",
    }'

    Method: GET
    url: http://localhost:3333/advertiser/:advertiser_id/offers \
    header: 'Content-Type: application/json' \
    data: {}'

    Method: GET
    url: http://localhost:3333/advertiser/offers \
    header: 'Content-Type: application/json' \
    data: {}'

    Method: PUT
    url: http://localhost:3333/advertiser/:advertiser_id/offers/:offer_id \
    header: 'Content-Type: application/json' \
    data: {
        "advertiser_name": "Walmart",
        "url": "url do produto",
        "description": "Descrição",
        "startAt": "2021-11-02 12:12:22",
        "endsAt": "2021-11-02 12:12:22",
        "state": "true",
        "premium": "false",
    }'

    Method: DELETE
    url: http://localhost:3333/advertiser/:advertiser_id/offers/:offer_id \
    header: 'Content-Type: application/json' \
    data: {
        "advertiser_name": "Walmart",
        "url": "url do produto",
        "description": "Descrição",
        "startAt": "2021-11-02 12:12:22",
        "endsAt": "2021-11-02 12:12:22",
        "state": "true",
        "premium": "false",
    }'
