<p align="center">
    <a href="https://github.com/LakeMaps">
        <img src="https://avatars.githubusercontent.com/u/20632669?s=200" alt="Lake Maps NL" />
    </a>
</p>
<h1 align="center">Message Schemas</h1>

This is a work in progress.

This repository contains the Protocol Buffer schemas for the messages used by Lake Maps' boat control software and Hangashore applications. The schemas here can be used to generate source code in a number of different languages (see https://developers.google.com/protocol-buffers/ for more information).

## JavaScript

The JavaScript output of `protoc` is published on npm as a CommonJS module:

```bash
$ npm install @lakemaps/schemas
```

### TypeScript

The `@lakemaps/schemas` package includes TypeScript definitions created using [Angular's Clutz project][clutz].

To build the TypeScript definitions from source:

```bash
$ build/buildscript
$ npm run build
```

  [clutz]:https://github.com/angular/clutz
