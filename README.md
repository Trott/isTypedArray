# isTypedArray
Utility function to check if an object is a TypedArray

## Installation

```sh
npm install @trott/istypedarray
```

## Usage

```js
const isTypedArray = require('@trott/istypedarray');
isTypedArray(new Uint8ClampedArray([])); // true
isTypedArray('fhqwhgads'); // false
```
