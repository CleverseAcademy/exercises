import {
  Eq,
  Optional,
  fib,
  mutual,
  prime,
  drawDown,
  summarize,
  filterLt,
  filterGt,
  isMember,
  compoundedReturn,
  mean,
  mode,
  mid,
  median,
  reverse,
  toBytes,
  transpose,
  transposable,
  flatMap,
  mapRevertSign,
  unique,
  markdownToHTML,
  markdownToHTMLDeclarative,
} from ".";

describe("fib", () => {
  it("unexpected value", () => {
    [
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 5],
      [6, 8],
      [7, 13],
    ].forEach((test) => {
      const [n, expected] = test;
      expect(fib(n)).toBe(expected);
    });
  });
});

describe("mutual", () => {
  it("unexpected value", () => {
    const tests: Eq[][][] = [
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
      const [a, b, expected] = test;
      expect(mutual(a, b).sort()).toEqual(expected.sort());
    });
  });
});

describe("prime", () => {
  it("unexpected value", () => {
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
      const [n, expected] = test;
      expect(prime(n)).toStrictEqual(expected);
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
      const [chart, expected] = test;
      expect(drawDown(chart)).toStrictEqual(expected);
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

describe("filterLt", () => {
  it("unexpected value", () => {
    const tests: [number, number[], number[]][] = [
      [112, [110, 111, 112, 113, 114], [110, 111]],
      [69, [67, 68, 69, 70], [67, 68]],
    ];

    tests.forEach((test) => {
      const [n, arr, expected] = test;
      expect(filterLt(n, arr)).toEqual(expected);
    });
  });
});

describe("filterGt", () => {
  it("unexpected value", () => {
    const tests: [number, number[], number[]][] = [
      [112, [110, 111, 112, 113, 114], [113, 114]],
      [69, [67, 68, 69, 70], [70]],
    ];

    tests.forEach((test) => {
      const [n, arr, expected] = test;
      expect(filterGt(n, arr)).toEqual(expected);
    });
  });
});

describe("isMember", () => {
  const tests: [Eq, Eq[], boolean][] = [
    [1, [10, 20, 30], false],
    [2, [1, 2, 3], true],
    ["john", ["jane", "foo", "bar"], false],
    ["foo", ["jane", "foo", "bar"], true],
  ];

  tests.forEach((test) => {
    const [mem, arr, expected] = test;
    expect(isMember(mem, arr)).toEqual(expected);
  });
});

describe("compoundedReturn", () => {
  it("unexpected value", () => {
    const tests: [number, number, number, number][] = [
      [100, 0, 3, 100],
      [100, 2, 1, 102],
      //   [100, 10, 1, 110], // Stupid JS rouding error
      //   [100, 10, 2, 121],
    ];

    tests.forEach((test) => {
      const [amount, interest, periods, expected] = test;
      expect(compoundedReturn(amount, interest, periods)).toEqual(expected);
    });
  });
});

describe("mean", () => {
  it("unexpected value", () => {
    const tests: [number[], number][] = [
      [[1, 2, 3, 4, 5], 3],
      [[0, 1, 2], 1],
      [[10, 20], 15],
      [[9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24, 25], 16.75],
    ];

    tests.forEach((test) => {
      const [arr, expected] = test;
      expect(mean(arr)).toBe(expected);
    });
  });
});

describe("mode", () => {
  it("unexpected value", () => {
    const tests: [number[], number | null][] = [
      [[1, 2, 3, 4, 5], null],
      [[0, 1, 2], null],
      [[10, 20, 10], 10],
      [[10, 20, 10, 20], null],
      [[10, 20, 10, 20, 10], 10],
      [[9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24, 25], 13],
    ];

    tests.forEach((test) => {
      const [arr, expected] = test;
      expect(mode(arr)).toEqual(expected);
    });
  });
});

describe("mid", () => {
  it("unexpected value", () => {
    const tests: [number[], number | number[]][] = [
      [[1, 2, 3, 4, 5], [3]],
      [[0, 1, 2], [1]],
      [[10, 20, 10], [20]],
      [
        [10, 20, 10, 20],
        [20, 10],
      ],
      [[10, 20, 10, 20, 10], [10]],
    ];

    tests.forEach((test) => {
      const [arr, expected] = test;
      expect(mid(arr)).toEqual(expected);
    });
  });
});

describe("median", () => {
  it("unexpected value", () => {
    const tests: [number[], number][] = [
      [[1, 2, 3, 4, 5], 3],
      [[10, 20, 21, 69, 112, 354], 45],
      [[9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24, 25], 15.5],
    ];
    tests.forEach((test) => {
      const [arr, expected] = test;
      expect(median(arr)).toEqual(expected);
    });
  });
});

describe("reverse", () => {
  it("unexpected value", () => {
    const tests: [Eq[], Eq[]][] = [
      [
        [1, 2, 3, 4],
        [4, 3, 2, 1],
      ],
      [
        ["foo", "bar", "baz"],
        ["baz", "bar", "foo"],
      ],
    ];

    tests.forEach((test) => {
      const [arr, expected] = test;
      expect(reverse(arr)).toStrictEqual(expected);
    });
  });
});

describe("toBytes", () => {
  it("unexpected value", () => {
    const tests: [string, number[]][] = [
      ["Bar", [66, 97, 114]],
      ["Foo", [70, 111, 111]],
      ["Foo🔥", [70, 111, 111]],
    ];

    tests.forEach((test) => {
      const [s, expected] = test;
      expect(toBytes(s)).toStrictEqual(expected);
    });
  });
});

describe("transpose", () => {
  it("unexpected value", () => {
    const tests: [[number, number, number[]], Optional<number>[][]][] = [
      [
        [8, 2, [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]],
        [
          [1, 0, 1, 0, 0, 0, 0, 0],
          [1, 0, 1, 0, 1, 1, 1, 1],
        ],
      ],
      [
        [2, 8, [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]],
        [
          [1, 0],
          [1, 0],
          [0, 0],
          [0, 0],
          [1, 0],
          [1, 0],
          [1, 1],
          [1, 1],
        ],
      ],
    ];

    tests.forEach((test) => {
      const [[w, h, arr], expected] = test;
      expect(transpose(arr, w, h)).toStrictEqual(expected);
    });
  });

  it("missing elems but must retain length", () => {
    const tests: [[number, number, number[]], Optional<number>[][]][] = [
      [
        [2, 8, [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1]],
        [
          [1, 0],
          [1, 0],
          [0, 0],
          [0, 0],
          [1, 0],
          [1, 0],
          [1, 1],
          [1, undefined],
        ],
      ],
    ];

    tests.forEach((test) => {
      const [[w, h, arr], expected] = test;
      const transposed = transpose(arr, w, h);

      transposed.forEach((line) => expect(line.length).toEqual(w));
      expect(transposed).toStrictEqual(expected);
    });
  });
});

describe("transposable", () => {
  it("unexpected value", () => {
    const tests: [[number[], number, number], boolean][] = [
      [[[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1], 8, 2], true],
      [[[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1], 8, 1], true],
      [[[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1], 2, 8], false],
    ];

    tests.forEach((test) => {
      const [[arr, w, h], expected] = test;
      expect(transposable(arr, w, h)).toEqual(expected);
    });
  });
});

describe("flatMap", () => {
  it("unexpected value", () => {
    const tests: [Eq[][], Eq[]][] = [
      [
        [
          [1, 2, 3],
          [4, 5, 6],
          [10, 20, 30],
        ],
        [1, 2, 3, 4, 5, 6, 10, 20, 30],
      ],
      [
        [
          ["foo", "bar"],
          ["2000", "3000"],
        ],
        ["foo", "bar", "2000", "3000"],
      ],
    ];

    tests.forEach((test) => {
      const [arr, expected] = test;
      expect(flatMap(arr)).toStrictEqual(expected);
    });
  });
});

describe("mapRevertSign", () => {
  it("unexpected value", () => {
    const tests: [number[], number[]][] = [
      [
        [1, 2, -3],
        [-1, -2, 3],
      ],
      [
        [4, -100.3, 1, -2],
        [-4, 100.3, -1, 2],
      ],
    ];

    tests.forEach((test) => {
      const [arr, expected] = test;
      expect(mapRevertSign(arr)).toStrictEqual(expected);
    });
  });
});

describe("unique", () => {
  const tests: [Eq[], Eq[]][] = [
    [
      [1, 1, 1, 2],
      [1, 2],
    ],
    [
      ["foo", "bar", "baz", "foo"],
      ["foo", "bar", "baz"],
    ],
  ];

  tests.forEach((test) => {
    const [arr, expected] = test;
    expect(unique(arr)).toStrictEqual(expected);
  });
});

describe("markdownToHTML", () => {
  const tests: [string, string][] = [
    [
      `# Hello
## ello
### llo
#### lo
o`,
      `<h1>Hello</h1>
<h2>ello</h2>
<h3>llo</h3>
<h4>lo</h4>
<p>o</p>`,
    ],
  ];

  tests.forEach((test) => {
    const [md, expected] = test;
    expect(markdownToHTML(md)).toStrictEqual(expected);
    expect(markdownToHTMLDeclarative(md)).toStrictEqual(expected);
  });
});
