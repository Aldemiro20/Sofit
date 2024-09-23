# Sofit - Guia de Exercícios Personalizados para Academia



## Descrição

**Sofit** é um aplicativo mobile desenvolvido com **React Native** utilizando o **React Native CLI**. O app foi projetado para ser um guia de exercícios eficiente e personalizado para academias, oferecendo uma experiência prática para usuários que desejam seguir um plano de exercícios ajustado às suas necessidades. 

O Sofit permite que os usuários configurem suas rotinas de treino, sigam exercícios pré-criados ou criem os seus próprios. Ele também oferece acompanhamento do progresso durante as sessões de treino.

## Funcionalidades Principais

- **Exercícios Pré-criados**: Um conjunto de exercícios padrão para diferentes níveis de aptidão (iniciante, intermediário, avançado).
- **Personalização de Treinos**: Configuração e personalização dos próprios treinos, ajustando séries, repetições e tempos de descanso.
- **Criação de Exercícios**: Usuários podem criar exercícios personalizados com base em seus objetivos.
- **Gerenciamento de Progresso**: O app acompanha as séries e repetições realizadas durante o treino.
- **Gerenciamento de Estado com Redux**: Utiliza o **Redux** para gerenciar o estado global da aplicação, garantindo que as informações do treino e do usuário estejam sincronizadas de maneira eficiente.

## Tecnologias Utilizadas

- **React Native CLI**: Para desenvolvimento de aplicativos mobile nativos.
- **Redux**: Para gerenciamento centralizado do estado do aplicativo.
- **React Navigation**: Implementação da navegação entre as telas do app.
- **Axios**: Para chamadas HTTP e comunicação com APIs externas.
- **AsyncStorage**: Para armazenamento local de dados no dispositivo (como os treinos do usuário).
  
## Gerenciamento de Estado com Redux

O **Redux** é utilizado para gerenciar todo o estado do aplicativo de forma eficiente. Aqui estão os principais pontos:

- **Estado de Exercícios**: Mantém a lista de exercícios disponíveis e os treinos personalizados criados pelo usuário.
- **Estado do Usuário**: Guarda as informações sobre o perfil e preferências de treino.
- **Persistência de Estado**: Utilizando `redux-persist` para armazenar dados de treino de forma persistente, garantindo que o progresso do usuário seja salvo mesmo após fechar o app.

## Como Executar o Projeto

### Pré-requisitos

- **Node.js** e **npm** instalados.
- **React Native CLI** configurado.
- SDK Android e/ou Xcode (para iOS) configurados.
- Emulador Android/iOS ou dispositivo físico.

### Passos para Rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Aldemiro20/Sofit.git
cd Sofit
npm install
npx react-native run-android
