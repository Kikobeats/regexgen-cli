/* global describe, it */

'use strict'

const exec = require('child_process').execFileSync
const path = require('path')

const cli = path.resolve('./bin/index.js')

require('should')

describe('regexgen-cli', function () {
  it('get input from CLI', function () {
    const output = exec(cli, ['foo', 'bar'], {encoding: 'utf8'})
    output.should.be.equal('/bar|foo/')
  })

  it('get input from stdin', function () {
    const output = exec(cli, {encoding: 'utf8', input: 'foobar\n'})
    output.should.be.equal('/foobar/')
  })
})
