export const sayHello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!name){
        reject('Name is empty !')
      }else{
        resolve(`Hello ${name}, nice to meet you !`)
      }
    }, 3000)
  })
}

export const getBalance = async (name, from) => {
  const balance = await from()
  return { name, balance}
}