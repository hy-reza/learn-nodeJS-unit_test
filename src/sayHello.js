export const sayHello = (name) => {
  if(!name) throw new Error('Name is required')

  return `Hello ${name}`
}


export const sayHelloCallback = (name, callback) => {
  return `Hello ${callback(name)}`
}