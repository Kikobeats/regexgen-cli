# regexgen-cli

![Last version](https://img.shields.io/github/tag/Kikobeats/regexgen-cli.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/regexgen-cli/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/regexgen-cli)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/regexgen-cli.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/regexgen-cli)
[![Dependency status](https://img.shields.io/david/Kikobeats/regexgen-cli.svg?style=flat-square)](https://david-dm.org/Kikobeats/regexgen-cli)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/regexgen-cli.svg?style=flat-square)](https://david-dm.org/Kikobeats/regexgen-cli#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/regexgen-cli.svg?style=flat-square)](https://www.npmjs.org/package/regexgen-cli)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> CLI interface for [regexgen](https://github.com/devongovett/regexgen). It Generates regular expressions that match a set of strings.

## Install

```bash
$ npm install regexgen-cli --global
```

## Usage

```bash
$ regexgen --help

  Generates regular expressions that match a set of strings.

  Usage
    $ regexgen [-gimuy] string1 string2 string3...

  Examples
    $ regexgen foobar foobaz foozap fooza
    $ jq '.keywords' package.json | regexgen
```

## Related

- [randexp.js](https://github.com/fent/randexp.js) – Generate a random string that matches a given RegExp.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
