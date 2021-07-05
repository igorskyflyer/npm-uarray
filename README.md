## UArray

Provides `UArray`, an `Array` type that supports negative indices/indexes, just wrap your _regular_ JavaScript array with `UArray()` and you are all set! 🎉🙌

<br>

<blockquote align="center"> ⚠ Uses the built-in <code>Proxy</code> object, check browser compatibility on the <a href="https://caniuse.com/proxy)"><strong>website</strong></a>.
</blockquote>

<br>
<br>

📢 This is the npm version of this project, if you are looking for the vanilla JavaScript version, check **[this](https://github.com/igorskyflyer/uarray)**.

<br>

### Usage

> ℹ Works like negative indices in other languages, e.g. **-1** picks that **last** element, **-2,** the **second to last**, etc.

<br>

Install first by doing,

```shell
npm i "@igor.dvlpr/uarray"
```

<br>

and then use it,

<br>

```js
const UArray = require('@igor.dvlpr/uarray')
const food = UArray(['🍟', '🌭', '🍿', '🥙', '🥓'])

console.log(food[-1]) // prints '🥓'
console.log(food[-3]) // prints '🍿'
```

<br>

<blockquote align="center">
🎉 Happy coding! 🙌
</blockquote>
