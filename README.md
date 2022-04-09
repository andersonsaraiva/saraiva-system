# saraiva-system

Test project to create a design system in vue 3 with the following characteristics: tokens, styles and components

## Install

```js
npm i saraiva-system
```

## Usage

```js
//import in main.js
import system from 'saraiva-system';
import 'saraiva-system/dist/saraiva-system.css';

// how to use tokens and themes 
import { tokens, themes } from 'saraiva-system';

// change default theme
this.$loadTheme('base'); // or vue
```

## Project setup

```js
yarn install
```

## View components

```js
yarn storybook
```

## Build storybook

```js
yarn build:storybook
```

## Build Tokens

```js
yarn build:tokens
```

## Build Lib

```js
yarn build:lib
```

## Lints and fixes files

```js
yarn lint
```

## Run unit tests

```js
yarn test
```

## Open coverage

```js
yarn coverage
```

## Watch tokens

```js
yarn watch:tokens
```
