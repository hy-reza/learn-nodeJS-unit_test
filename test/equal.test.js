//primitif var only
test('test toBe', () => {
  const name = 'reza'
  const sayHi = `hi ${name}`
  expect(sayHi).toBe('hi reza')
})

//object and other 
test('test toEqual', () => {
  let person = {id: "handy"}
  Object.assign(person, {name: "Reza"})
  expect(person).toEqual({id: "handy", name: "Reza"})
})