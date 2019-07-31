

describe("Add", () => {
  test("should return 0 when adding 0 to 0", () => {
    expect(0 + 0).toBe(0);
  });
  test("should return 1 when adding 0 to 1", () => {
    expect(0 + 1).toBe(1);
  });
  test("should return 1 when adding 1 to 0", () => {
    expect(1 + 0).toBe(1);
  });
  test("should return 2 when adding 1 to 1", () => {
    expect(1 + 1).toBe(2);
  });
});

describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
  ".add(%i, %i)",
  (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  },
);

describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`("$a + $b", ({a, b, expected}) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});
