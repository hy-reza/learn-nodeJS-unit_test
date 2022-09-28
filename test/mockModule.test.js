import { getProductById } from "../src/database.js"
import {ProductService} from "../src/product-services.js"
jest.mock("../src/database.js")


test('Mock module getProductById', () => {
  getProductById.mockImplementation((id) => ({
    id, name: 'product mock'
  }))

  const product = ProductService.findById(1)

  expect(product).toEqual({
    id: 1,
    name: 'product mock'
  })
})