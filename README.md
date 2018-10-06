# AlchemyAlcove Basic Functions

Basic functions used by AlchemyAlcove apps. These are functions that are used so commonly, that performance is integral.

*No dependencies*

348 bytes minified download size

## Install

npm install --save @alchemyalcove/basic-functions

## Use

```javascript
import { cx, isNil } from "@alchemyalcove/basic-functions";

cx({
"foo": true,
"bar": true,
"test": false,
"wrong": false,
"bugs": true
});
// foo bar bugs

isNil(undefined);
// true
```