export class myException extends Error {
  constructor(message) {
    super(message);
  }
}

export const sayHi = (name) => {
  if(!name){
    throw new myException('Ini error yahhh')
  }

  return `Hi ${name}`
}

