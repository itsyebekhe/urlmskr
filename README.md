<img src="./urlmskr.svg" width="80" height="80" align="right">

<p align="left"><strong>urlmskr</strong></p>

<p align="left">Simple and fast URL masker</p>

---

# ❓ About

urlmskr is a small project that allows you to mask your links and also send encoded messages. URL masking means to change the original URL to another one that cannot be easily read or understood but clicking on it will redirect you to the original link. urlmskr does not need any backend server or anything, all of it is in the frontend and can be hosted anywhere easily. It does not store any data in a database or anything. Thank you for reading! Support the project or me on [Patreon!](https://www.patreon.com/axorax) <3

# 🤔 Why

A simple and obvious answer to why you would want to use something like urlmskr would be to send links to your friends or someone without letting them know what site the link leads to. The problem with this is that people may send you links to sites that you may not want to visit. You can add `+reveal` at the end of the URL to see the destination. Example: `https://axorax.github.io/urlmskr/awdawd+reveal`. And the answer to why I made urlmskr is that my friend had made something similar but the URLs were way too big and so I wanted to make a better app than him.

# 💻 Integrate it into your project

urlmskr has a library or module in some programming languages. They are in the root directory with the name of `lib` followed by the extension of the programming language. You can paste the code into your project and use it or import it. I'll show you how to use the JavaScript library below:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Example</title>
  </head>
  <body>
    <script src="https://axorax.github.io/urlmskr/lib.js"></script>
    <script>
      document.write(urlmskr.mask('https://axorax.github.io')) // Mask URL
      document.write('<br>')                                   // Add empty line
      document.write(urlmskr.mask('Hello', 'text'))            // Mask text
    </script>
  </body>
</html>
```

---

<p align="center"><a href="https://www.patreon.com/axorax">Support me on Patreon</a> — <a href="https://github.com/axorax/socials">Check out my socials</a></p>