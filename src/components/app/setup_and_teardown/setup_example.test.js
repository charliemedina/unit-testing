const isCity = (city) => { return true; };

beforeAll(() => {
});

afterAll(() => {
});

test("city database has Vienna:", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

// General Advice
test.only("this will be the only test that runs", () => {
  expect(false).toBe(false);
});

test("this test will not run", () => {
  expect("A").toBe("A");
});

// Scoping
// Applies to all tests in this file
const initializeCityDatabase = () => {};

beforeEach(() => {
  return initializeCityDatabase();
});

test.skip("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test.skip("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe.skip("matching cities to foods", () => {
  // Applies only to tests in this describe block
  const initializeFoodDatabase = () => { };

  const isValidCityFoodPair = (cityA, cityB) => { return true; };

  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 sausage", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});