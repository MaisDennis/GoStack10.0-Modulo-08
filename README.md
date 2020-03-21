# GoStack 10.0 || Módulo 08

##  1. Descrição do projeto

React Hooks: useState, useEffect, useMemo, useCallback

##  2. Criando o projeto

1.  Configurando a estrutura
    1.  `yarn add eslint-plugin-react-hooks -D`
    2.  .eslint.js
        ```
        plugins: [
          'react',
          'prettier',
          'react-hooks'
        ```
    3.  rules:
        ```
        'no-param-reassign': 'off',
        'no-console':['error', { allow: ['tron'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
        ```
2.  Hook useState
    1.  **Ex01** Criar State.
        1.  src/App.js: import React, { useState } from 'react';
        2.  Criar state: const [] = useState([]);
        3.  return tech.map
        4.  add Button.
    2.  **Ex02** Input.
        1.  add State: newTech, input.

3.  Hook useEffect
    1.  **Ex03** substituem componentDidMount, componentDidUpdate, componentDidUnmount
        1.  useEffect(() => {}, []);
            1.  1o param = função que vai executar.
            2.  2o param = quando vai ser executada.
                1.  array de dependencias, fica monitorando alterações em certas variaveis. Ex. [tech] (**componentDidUpdate**)
            3.
        2.  Browser:
            1. Vide Inspecionar -> Application -> LocalStorage -> tech.
        3.  useEffect 1 unica vez ao carregar:
            1. array de dependencias = [] (**componentDidMount**)
        4.  uma função dentro do useEffect: return () => {} (**componentWillUnmount**) Ex: event listener / reomve event listender

4.  Hook useMemo
    1. **Ex04** Calculo somente quando alterar uma variavel. Ex, tech.length quando alterar [tech].

5.  Hook useCallback
    1.  **Ex05** Como se fosse useMemo, porém, em vez de retornar 1 valor, retorna 1 função.
        1.  Ex. a function handleAdd, é montada toda vez que alterar letra e State.
