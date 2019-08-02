import { fn } from "moment";

describe("Some tests using mock", () => {

  test("Using a mock function", () => {
    function forEach(items, callback) {
      for (let index = 0; index < items.length; index+= 1) {
        callback(items[index]);
      }
    }
    
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);
    
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);
    
    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    
    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    
    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  test("Mock property", ()=> {
    const MyMock = jest.fn();
    const a = new MyMock();
    const b = {};
    const bound = MyMock.bind(b);
    bound();
    
    // eslint-disable-next-line no-console
    console.log(MyMock.mock.instances);
    // > [ <a>, <b> ]
  });

  describe("Mock return values", () => {
    test("mockReturnValueOnce and mockReturnValue methods", () => {
      const myMock = jest.fn();

      // undefined
      expect(console.log(myMock)).toBeUndefined();
  
      myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce("x")
        .mockReturnValue(true);
  
      console.log(myMock(), myMock(), myMock(), myMock());
      // > 10, 'x', true, true
    });
    
    test(`Make the mock return true for the first call,
          and false for the second call`, () => {

      const filterTestFn = jest.fn();
      filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

      const result = [11, 12].filter(filterTestFn);
      
      console.log(result);
      // > [11]
      console.log(filterTestFn.mock.calls);
      // > [ [11], [12] ]
    });
  });

  test(`function calls produce different results,
        use the mockImplementationOnce method`, () => {
    
    const myMockFn  = jest
      .fn()
      .mockImplementationOnce(() => (null, true))
      .mockImplementationOnce(() => (null, false));

    myMockFn((err, value) => console.log(value));  // true
    myMockFn((err, value) => console.log(value));  // false
  });

  test(`function runs out of implementations defined
        with mockImplementationOnce`, () => {

    const myMockFn  = jest
      .fn(() => "default")
      .mockImplementationOnce(() => "first call")
      .mockImplementationOnce(() => "second call");

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // > 'first call', 'second call', 'default', 'default'
  });

  test(`For cases where we have methods that are typically chained 
        (and thus always need to return this)`, () => {

    const myObj = {
      myMethod: jest.fn().mockReturnThis(),
    };
          
    // is the same as
          
    const otherObj = {
      // eslint-disable-next-line func-names
      myMethod: jest.fn(function() {
        return this;
      }),
    };
  });

  test("Provide a name for your mock functions", () => {
    const myMockFn = jest
      .fn()
      .mockReturnValue("default")
      .mockImplementation(scalar => scalar + 42)
      .mockName("add42");

    expect(myMockFn()).toBeNaN();
    expect(myMockFn(8)).toEqual(50);
  });

});

