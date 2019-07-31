import "jest-extended";
import "jest-chain";

describe("using chain and extended library", () => {
  test("hello word test", () => {
    const str = "Hello, WORLD!";
    expect(str)
      .toBeString()
      .toEqualCaseInsensitive("hello, world!")
      .toStartWith("Hello,")
      .toEndWith("WORLD!")
      .toIncludeRepeated("l", 2);
  });
  
  test( "fibonacci series test", () => {
    const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    expect(array)
      .toBeArray()
      .toSatisfyAll(n => n > 0)
      .toIncludeAllMembers([1 , 2, 3, 5, 8, 13]);
  });
});

