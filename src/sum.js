export const sum = (first, second) => first + second

export const sumAll = (nums, callback) => {
  let result = nums.reduce((prev, curr) => prev + curr)
  callback(result)
}

export const sumAllAndReturn = (nums, callback) => {
  let result = nums.reduce((prev, curr) => prev + curr)
  return callback(result)
}