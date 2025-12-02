# EcoTravel - Aplicativo de Turismo Sustentável

## Dupla:
- 37023566 PEDRO HENRIQUE BARBOZA DA SILVA
- 37023114 JOAB RANIEL RODRIGUES

## Título do Projeto
EcoTravel - Protótipo de Aplicativo Informativo sobre Turismo Sustentável!

## Descrição do Estudo de Caso
A empresa **EcoTravel**, especializada em consultoria de roteiros ecológicos, deseja lançar um protótipo simples de aplicativo informativo que apresente ao usuário atrações de turismo sustentável em diferentes regiões do mundo. O objetivo é permitir que o usuário visualize informações básicas sobre uma atração, veja uma imagem ilustrativa e possa interagir com botões que alteram o conteúdo exibido.

Este aplicativo é um **protótipo informativo** desenvolvido em React Native utilizando Expo.

## Screenshot do Aplicativo
<img width="auto" height="768" alt="image" src="https://github.com/user-attachments/assets/a1060a29-b65a-40cb-af05-1facf6805c02" />
<img width="auto" height="768" alt="image" src="https://github.com/user-attachments/assets/fd7c0013-2a34-4e15-aca8-2ef5c705dcd1" />



## Tecnologias Utilizadas
- React Native
- Expo
- JavaScript/JSX
- StyleSheet

## Requisitos Técnicos Implementados

### 1. Estrutura do Aplicativo
- Tela principal com nome do app e descrição
- Imagem ilustrativa relacionada ao tema
- Botões interativos para navegação
- Alternância entre informações (dicas, localização, curiosidades)

### 2. Componentes
- Componente principal (App.js)
- Componente personalizado (AttractionCard.js)
- Uso de props para passagem de dados
- Estilização com StyleSheet

### 3. Funcionalidades
- Navegação entre diferentes atrações
- Alternância entre tipos de informação
- Interface responsiva
- Estado gerenciado com useState

## Instruções de Execução

### Pré-requisitos
- Node.js instalado
- Expo CLI instalada globalmente
- Expo Go app no dispositivo móvel ou emulador

### Passos para Execução

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
```

2. Acesse a pasta do projeto:
```bash
cd EcoTravelApp
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o aplicativo:
```bash
npx expo start
```

5. Escaneie o QR code com o aplicativo Expo Go no seu dispositivo móvel.

### Alternativa para Emulador
- Para Android: Pressione 'a' no terminal após iniciar o Expo
- Para iOS: Pressione 'i' no terminal após iniciar o Expo (necessário macOS)

## Estrutura de Arquivos
```
EcoTravelApp/
├── assets/           # Imagens e recursos visuais
├── components/       # Componentes personalizados
│   └── AttractionCard.js
├── App.js           # Componente principal
├── package.json     # Dependências do projeto
└── README.md        # Este arquivo
```

## Funcionalidades do Aplicativo
1. Exibe informações sobre destinos de turismo sustentável
2. Permite navegação entre diferentes atrações
3. Oferece diferentes tipos de informação sobre cada destino
4. Interface intuitiva e fácil de usar
5. Design responsivo para diferentes tamanhos de tela

## Cidades Fictícias Incluídas
1. Alameda dos Anjos (Power Rangers)
2. Cidade de Gotham (Batman)
3. Townsville (Meninas Superpoderosas)

## Observações
Este projeto foi desenvolvido como parte de uma atividade acadêmica para demonstrar habilidades em React Native e Expo. O aplicativo é um protótipo e não inclui funcionalidades avançadas como persistência de dados ou integração com APIs externas.
