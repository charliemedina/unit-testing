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