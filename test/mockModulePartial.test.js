 import { getAllProduct } from "../src/database";
 import { ProductService } from "../src/product-services";

 jest.mock("../src/database.js", () => {
  const oriModule = jest.requireActual('../src/database.js')

  return {
    __esModule: true,
    ...oriModule,
    getAllProduct: jest.fn()
  }
 })

 test('Mock module getProductById', () => {
  getAllProduct.mockImplementation(() => ({
    id : 1, name: 'product mock'
  }))

  const product = ProductService.findAll()

  expect(product).toEqual({
    id: 1,
    name: 'product mock'
  })
})