# OficinaApp
> Aplicativo de orçamento

Projeto de app que recebe informações de orçamento da api e repassa para o usuário de forma organizada.

## Extensões

- [React Native](https://facebook.github.io/react-native/): Permite a criação de aplicativos nativos utilizando Javascript e React.
- [React Navigation](https://reactnavigation.org/): Para navegação entre páginas no aplicativo.
- [Axios](https://github.com/axios/axios): Requisições API.

## Instalação

Criando o Projeto React Native:

```
react-native init
```

Iniciando o Projeto:

```
react-native run-android
  # ou
# react-native run-ios
```

Instalando o Axios:

```
yarn add axios
  # ou com npm
# npm install axios
```

Instalando o React Navigation:
```
yarn add react-navigation
  # ou com npm
# npm install --save react-navigation
```
Para o React Navigation funcionar pode ser necessário instalar uma dependência chamada react-native-gesture-handler
```
yarn add react-native-gesture-handler
# ou com npm
# npm install --save react-native-gesture-handler
```
Agora é só linkar a depedência:
```
react-native link react-native-gesture-handler
```
