[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/1BW9N2Sv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10702965&assignment_repo_type=AssignmentRepo)

# TypeScriptInit

Este repositório é um modelo de ponto de partida para uma aplicação em TypeScript

Definimos aqui a estrutura inicial com a configuração básica para tsconfig.json, package.json e um
index.ts.

Para utilizar a aplicação é necessário configurar o seu ambiente instalando o Node e a biblioteca do
TypeScript

Tutorial Node.js: https://code.visualstudio.com/docs/nodejs/nodejs-tutorial

Tutorial TypeScript: https://code.visualstudio.com/docs/typescript/typescript-tutorial

# tsconfig.json

```
{
    "compilerOptions": {
        "outDir": "build",
        "module": "commonjs",
        "target": "es6",
    }
}
```

Define que nossa compilação de TypeScript para JavaScript seja salva no diretório de saída "build".
Será utilizado o "commonjs" para possibilitar a compatibilidade com módulos e também a versão ES6 do
JavaScript.

<details>
<summary>Visualizar atimizações da ES6</summary>

- As funções de seta (arrow functions), que permitem escrever funções mais concisas e elegantes, sem
  a necessidade de usar a palavra-chave function ou o contexto this.
- As literais de modelo (template literals), que permitem criar strings com interpolação de
  variáveis e expressões, usando acentos graves (`) em vez de aspas.
- A destruição de objetos e arrays (destructuring), que permite extrair valores de objetos e arrays
  e atribuí-los a variáveis de forma simples e rápida.
- Os parâmetros padrão (default parameters), que permitem definir valores pré-definidos para os
  parâmetros das funções, evitando erros quando eles não são fornecidos.
- As palavras-chave let e const, que permitem declarar variáveis com escopo de bloco, evitando
  problemas com o hoisting e a reatribuição indevida.
- Os iteradores e o laço for…of, que permitem percorrer objetos iteráveis (como arrays, strings,
  maps, sets, etc.) de forma mais fácil e intuitiva.
- As classes, que permitem criar objetos com herança, construtores, métodos e propriedades
estáticas, usando uma sintaxe mais clara e familiar.
</details>

# package.json

```
{
    "name": "typescriptinit", // nome da aplicação
    "version": "1.0.0", // versão da aplicação
    "devDependencies": {
      "typescript": "^2.7.2" // versão do typescript
    },
    "scripts": {
      "start": "tsc && node build/index.js",
      "prestart": "npm run build",
      "build": "tsc"
    }
}
```

Neste arquivo definimos alguns informações sobre o projeto, as dependências, neste modelo tendo
apenas o typescript. Também adicionamos alguns scripts para para serem executados pelo Node, start
está realizando a compilação (tsc) e depois rodando a aplicação JavaScript gerada (node
build/index.js).

# Atividade - Prática em Programação Orientada a Objetos com TypeScript

Nesta atividade iremos praticar o conteúdo visto em sala sobre TypeScript e POO.

## Domínio do Problema

Descrever através do paradigma de Orientação a Objetos uma comitiva de um time de futebol. Seja
realista e detalhista.

Mínimo desejável de objetos:

- Pessoa
- Jogador
- Classes relacionadas a posição (Goleiro, Zagueiro etc)
- Profissional
- Classes relacionadas aos demais profissionais (Técnico, Médico etc)

Por fim criar uma classe chamada **Elenco**, que teria um atributo chamado lista de pessoas e um
comportamento para imprimir o elenco.

## Demais requisitos

Limite a quantidade de jogadores a serem adicionados. Ex:

```
class Goleiro extends Jogador {

    private static numInstancias: number = 0; //atributo estático que conta o número de instâncias
    private static readonly LIMITE: number = 3; //atributo estático e somente leitura que define o limite de instâncias

    constructor(atributos) {
        super(atributos); //chama o construtor da superclasse Jogador
        if (Goleiro.numInstancias < Goleiro.LIMITE) { //verifica se o limite não foi atingido
            Goleiro.numInstancias++; //incrementa o número de instâncias
        } else {
            throw new Error("Limite de goleiros excedido"); //lança um erro se o limite foi atingido
        }
    }
    //outros atributos e métodos da classe Goleiro
}
```

Utilize interface, enum, modulos, get e set, classes e atributos abstratos, todos os tipos de
visibilidade e arrow function.

## Saída

Como resultado é necessário instanciar um elenco completo o mais próximo da realidade possível e
imprimir a lista com nome, número, função/posição e se é titular ou reserva.

## Extra

A classe **Elenco** pode ser mais completa e inteligente do que apenas imprimir a listagem, ela pode
ser responsável por armazenar e manipular todos os objetos das classes **Pessoa**, **Jogador**,
**Profissional** e suas subclasses.

Como atividade extra faça com que a classe **Elenco** possa adicionar e remover cada tipo de função
do elenco do time com suas respectivas características.
