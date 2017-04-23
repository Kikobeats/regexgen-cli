#!/usr/bin/env node
'use strict'

const pkg = require('../package.json')
const regexgen = require('regexgen')
const getStdin = require('get-stdin')
const stripEof = require('strip-eof')
const path = require('path')

require('update-notifier')({pkg}).notify()

const cli = require('meow')({
  pkg: pkg,
  help: require('fs').readFileSync(path.join(__dirname, 'help.txt'), 'utf8')
})

function parseJSON (str) {
  try {
    return JSON.parse(str)
  } catch (err) {
  }
}

getStdin()
  .then(stripEof)
  .then(stdin => parseJSON(stdin) || stdin || cli.input)
  .then(input => [].concat(input))
  .then(input => {
    if (!input.length) {
      cli.showHelp()
      process.exit(1)
    }

    const flags = Object.keys(cli.flags).join('')
    const output = regexgen([].concat(input), flags)

    process.stdout.write(output.toString())
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
