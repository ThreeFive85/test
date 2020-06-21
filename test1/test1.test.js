import solution from "./test1";

describe("TEST1", () => {
  test("return typeof solution(a,b)", (done) => {
    expect(typeof solution(1, 2)).toEqual("number");
    done();
  });

  test("should be return answer of solution(a,b)", (done) => {
    expect(solution(1, 2)).toEqual(3);
    expect(solution(5, 12)).toEqual(17);
    done();
  });

  test("should be return (error string) of solution(-1,2)", (done) => {
    expect(solution(-1, 2)).toEqual("Please enter a positive integer");
    expect(solution(1, -2)).toEqual("Please enter a positive integer");
    done();
  });
});
