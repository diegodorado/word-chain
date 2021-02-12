import {expect} from 'chai'
import {chain} from './chain'
const fs = require('fs');

describe('chain known input/output assertions', () => {

  const filename = '/usr/share/dict/words'; 
  const punctuation_pattern = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
  const words = fs.readFileSync(filename, 'utf-8')
    .split('\n')
    .filter( w => w.toLowerCase() === w && !punctuation_pattern.test(w) )

  it(' duck/bill chain is comprised of 5 elements ', () =>{
    const result  = chain(words,"duck","bill")
    expect(result).to.be.an('array')
    expect(result.length).to.equal(5)
  })
  
  it(' spinning/top returns null', () =>{
    const result  = chain(words,"spinning","top")
    const expected = null
    expect(result).to.equal(expected)
  })

  it(' sport/spine chain is comprised of 4 elements ', () =>{
    const result  = chain(words,"sport","spine")
    expect(result).to.be.an('array')
    expect(result.length).to.equal(4)
  })
  
  it(' tallow/wallow chain is comprised of 2 elements ', () =>{
    const result  = chain(words,"tallow","wallow")
    expect(result).to.be.an('array')
    expect(result.length).to.equal(2)
  })
  
  it(' orange/pillow returns null', () =>{
    const result  = chain(words,"orange","pillow")
    expect(result).to.equal(null)
  })

  it(' ape/man chain is comprised of 6 elements ', () =>{
    const result  = chain(words,"ape","man")
    expect(result).to.be.an('array')
    expect(result.length).to.equal(6)
  })
  
})
