import {sum} from '../src/sum.js'
// function it() & test() is the same
describe('when call sum() function', ()=> {
  it('Should get 60 when the params is (30, 30)', () => {
    expect(sum(30,30)).toBe(60)
  })

  it('Should get 30 when the params is (15,15)', () => {
    expect(sum(15,15)).toBe(30)
  })
})