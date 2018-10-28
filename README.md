## useClipboard
> subscribes to clipboard

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)

## Install

 - [NPM](https://www.npmjs.com/package/useclipboard)
```sh
npm install useclipboard --save
```
 - Yarn
```sh
yarn add useclipboard 
```

## Usage

```js
import useClipboard from 'useclipboard';

function yourComponent() {
  let cliboard = useClipboard();
// { 
//     clipboardtext:text,
//     setText: function to update clipboardText,
//     syncClipboardText: function to sync cliboardText
// }

  // ...
}
```