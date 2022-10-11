# Nuxt 3

Esta aplicação utiliza o Nuxt3. A renderização é feita do lado do servidor, e para gerenciamento global é utilizado o Pinia.

## Inicializando...

Instale as dependências:

```bash
yarn install
```

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

Acesse http://localhost:3000!

Para rodar os testes da aplicação foi utilizado o Cypress. Execute o seguinte comando para visualizar melhor:

```bash
yarn cypress:open
```

Para organizar os estilos CSS, foi utilizado o pré-processador SASS juntamente com a metodologia BEM e a arquitetura ITCSS.
Os componentes utilizam o conceito de Atomic Design, e o lint utilizado foi o recomendado pelo antfu, criador do vitest.
