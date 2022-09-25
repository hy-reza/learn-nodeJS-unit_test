test('Array testing', () => {
  let arr = ['Handy', 'Reza', 'Alfanda']
  //using toBe check
  expect(arr).toContain('Handy', 'Reza')
  //using toEqual check
  arr = [{name : "reza"}, {name: "cholid"}, {name : "ahyar"}]
  expect(arr).toContainEqual({name : 'reza'})

  //arr
})