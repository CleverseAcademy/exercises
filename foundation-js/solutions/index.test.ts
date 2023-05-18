import {
  Eq,
  fib,
  mutual,
  prime,
  drawDown,
  summarize,
  //   filterLt,
  //   filterGt,
  //   isMember,
  //   compoundedReturn,
  //   mean,
  //   mode,
  //   mid,
  //   median,
  //   avgAge,
  //   mapAge,
  //   flatMap,
  //   mapMean,
  //   mapMode,
  //   countWord,
  //   countWordMap,
  //   unique,
  //   markdownToHTML,
  //   markdownToHTMLDeclarative,
} from ".";

describe("fib", () => {
  it("unexpected value", () => {
    [
      // [input, expectedValue]
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 5],
      [6, 8],
      [7, 13],
    ].forEach((test, i) => {
      expect(fib(test[0])).toBe(test[1]);
    });
  });
});

describe("mutual", () => {
  it("unexpected value", () => {
    const tests: Eq[][][] = [
      // [input1, input2, expectedValue]
      [
        [1, 2, 3],
        [3, 2, 1],
        [1, 2, 3],
      ],
      [
        [100, 5, 200, 30],
        [30, 1234, 700, 5],
        [30, 5],
      ],
      [["foo", "bar", "baz"], ["faz", "boo", "far"], []],
    ];

    tests.forEach((test) => {
      expect(mutual(test[0], test[1]).sort()).toEqual(test[2].sort());
    });
  });
});

describe("prime", () => {
  it("unexpected value", () => {
    // 2, 3, 5, 7, 11, 13, 17
    // The test case input needs to be in an array
    // to simplify type system for the test code
    const tests: [number, number[]][] = [
      [1, [2]],
      [2, [2, 3]],
      [3, [2, 3, 5]],
      [4, [2, 3, 5, 7]],
      [5, [2, 3, 5, 7, 11]],
      [6, [2, 3, 5, 7, 11, 13]],
      [7, [2, 3, 5, 7, 11, 13, 17]],
    ];

    tests.forEach((test) => {
      expect(prime(test[0])).toStrictEqual(test[1]);
    });
  });
});

describe("drawDown", () => {
  it("unexpected value", () => {
    const tests: [number[], number][] = [
      [[1, 2], 0],
      [[1, 4, 2, 1], 3],
      [[1, 10, 12, 14, 7, 4, 20, 9], 11],
      [[100, 90, 80, 10, 110, 10, 1], 109],
      [[200, 90, 80, 10, 110, 10, 1], 199],
      [[7, 8, 9, 1, 10, 8, 6, 11, 200], 8],
    ];

    tests.forEach((test) => {
      expect(drawDown(test[0])).toStrictEqual(test[1]);
    });
  });
});

describe("summarize", () => {
  it("short text cut", () => {
    expect(summarize("Foobar", "... read more at cleverse.com", 6)).toEqual(
      "Foobar",
    );
  });

  it("not obeying len", () => {
    expect(summarize("some-long-ass-word", " ...", 6)).toBe("");
  });

  it("not obeying len (due to long trail)", () => {
    expect(summarize("some-long-ass-word", " ......", 6)).toBe("");
  });

  it("unexpected value", () => {
    const s1 =
      "I am from Cleverse Academy! Today, I’m here to teach you some JavaScript programming";
    expect(summarize(s1, " ...", 30)).toEqual(
      "I am from Cleverse Academy! ...",
    );

    const s2 = "Good morning ladies and gentlemen";
    expect(summarize(s2, " ...", 2)).toEqual("");
    expect(summarize(s2, " ...", 10)).toEqual("Good ...");
    expect(summarize(s2, " ...", 20)).toEqual("Good morning ...");
    expect(summarize(s2, " ...", 25)).toEqual("Good morning ladies and ...");
  });
});
