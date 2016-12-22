#!/usr/bin/env node
'use strict'

const pkg = require('../package.json')
const regexgen = require('regexgen')
const getStdin = require('get-stdin')
const path = require('path')

require('update-notifier')({pkg: pkg}).notify()

const cli = require('meow')({
  pkg: pkg,
  help: require('fs').readFileSync(path.join(__dirname, 'help.txt'), 'utf8')
})

function parseJSON (str) {
  try {
    return JSON.parse(str)
  } catch (err) {
    return
  }
}

getStdin().then((stdin) => {
  const input = parseJSON(stdin) || stdin || cli.input

  if (!input.length) {
    cli.showHelp()
    process.exit(1)
  }

  const output = regexgen(input)
  process.stdout.write(output.toString())
  process.exit(0)
})
