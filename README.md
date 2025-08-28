<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-uarray/main/media/uarray.png" alt="Icon of UArray" width="256" height="256">
  <h1>UArray</h1>
</div>

<br>

<h4 align="center">
  🎉 Provides UArray, an Array type that supports negative indices/indexes, just wrap your regular JavaScript array with UArray() and you are all set! 🙌
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🔢 Negative indexing (-1, -2, etc.)
- 🧳 Accepts array or multiple values
- 🪞 Behaves like a native array
- 🛠️ Supports all standard methods
- 🧼 Safe fallback for non-numeric keys
- 🧪 Ideal for reverse access and testing
- 🚀 Drop-in replacement, zero config

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/uarray
```

```bash
yarn add @igorskyflyer/uarray
```

```bash
npm i @igorskyflyer/uarray
```

<br>

> ℹ️
> Uses the built-in `Proxy` object, check browser compatibility on the [Can I Use](https://caniuse.com/proxy) website.
>

<br>
<br>

## 🗒️ Examples


```js
import { UArray } from '@igorskyflyer/uarray'

const food = UArray(['🍟', '🌭', '🍿', '🥙', '🥓']) // array passed
const objects = UArray('🎈', '🎩', '⚽', '🥇', '🎯') // no array passed, just direct values

console.log(food[-1]) // prints '🥓'
console.log(food[-3]) // prints '🍿'

console.log(objects[-1]) // prints '🎯'
console.log(objects[-3]) // prints '⚽'
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-uarray/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-uarray/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[]()

> __

[]()

> __

[]()

> __

[]()

> __

[]()

> __

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
