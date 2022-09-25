export const sayHello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!name){
        reject('Name is empty !')
      }else{
        resolve(`Hello ${name}, nice to meet you !`)
      }
    }, 1000)
  })
}