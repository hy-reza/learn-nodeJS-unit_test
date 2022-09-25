//this function will run before all outside & inside test done
beforeAll(() => {
  console.info("Before All Test Outside");
});

//this function will run after all outside & inside test done
afterAll(() => {
  console.info("After All Test Outside");
});

//this function will run before each outside & inside test done
beforeEach(() => {
  console.info("Before Test Outside");
});

//this function will run after each outside & inside test done
afterEach(() => {
  console.info("After Test Outside");
});

test("Test Outside", () => {
  const name = "Reza";
  expect(name).toBe("Reza");
  console.info("First Ouside Test");
});

describe("Inside", () => {
  //this function will run before all inside test done
  beforeAll(() => {
    console.info("Before All Test Inside");
  });

  //this function will run after all inside test done
  afterAll(() => {
    console.info("After All Test Inside");
  });

  //this function will run before each inside test done
  beforeEach(() => {
    console.info("Before Test Inside");
  });

  //this function will run after each inside test done
  afterEach(() => {
    console.info("After Test Inside");
  });

  test("Test Inside", () => {
    const name = "Reza Inner";
    expect(name).toBe("Reza Inner");
    console.info("First Inside Test");
  });
});
