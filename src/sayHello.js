export const sayHello = (name) => {
  if(!name) throw new Error('Name is required')

  return `Hello ${name}`
}