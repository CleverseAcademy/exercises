# Foundation JavaScript exercises

1.  Writes a function `draw(n)`

    `draw(n)` takes in a number `n`, and prints the stars (`*`) into the console in this pattern:

    > Hint: Use nested loop, using assignment operator “=+”,
    > and “\n” which is new line character (read “back-slash-N”)

    ```javascript
    draw(5);

    // *****
    // *****
    // *****
    // *****
    // *****
    ```

2.  Re-write `drawNg(n)` (-ng suffix is usually used for next-gen)

    Like `draw(n)`, but this time `drawNg(n)` prints this pattern:

    ```javascript
    drawNg(5);

    // *
    // **
    // ***
    // ****
    // *****
    ```

3.  Write a function `maxNegMinPos(arr)`

    `maxNegMinPos(arr)` takes in an array `arr`, and it prints the max negative value (maxNeg)
    as well as the min positive value (minPos)

    ```javascript
    const arr = [12, -13, 14, 4, 2, -1, -18];

    maxNegMinPos(arr);

    // MaxNeg is -1
    // MinPos is 2
    ```

4.  Write a function `maxNegMinPosObj(arr)`

    The business logic is identical to `maxNegMinPos` above, but it returns an object with 2 number fields
    `maxNeg` and `minPos`.

    ```javascript
    const arr = [12, -13, 14, 4, 2, -1, -18];

    maxNegMinPosObj(arr);

    // {
    //  maxNeg: -1,
    //  minPos: 2,
    // }
    ```

5.  Write a function `fib(n)`

    `fib(n)`returns an array of numbers containing first `n`th element of a fibonacci series.

    The series look like this:

    ```
    1, 2, 3, 5, 8, 13, 21, ...
    ```

    ```javascript
    fib(2); // 2

    fib(3); // 3

    fib(4); // 5

    fib(5); // 8

    fib(6); // 12
    ```

6.  Write a function `mutual(arr1, arr2)`

    `mutual(arr1, arr2)` returns a new array containing all mutual
    members of `arr1` and `arr2`

    ```javascript
    const class1 = ["Alice", "Bob", "John", "Jane"];
    const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

    console.log(mutual(class1, class2)); // ["John", "Bob"]
    ```

7.  Write a `fizzBuzz(n)` function

    `fizzBuzz(n)` iterates over [inclusive range [1, n]](<https://en.wikipedia.org/wiki/Interval_(mathematics)>),
    and for each element in the range, `fizzBuzz(n)` prints `Fizz` if the element is divisible by 3,
    `Buzz` if the element is divisible by 5, and `FizzBuzz` if the element is divisible by 3 and 5.

    If no conditions are met, `fizzBuzz(n)` prints the element.

    ```javascript
    fizzBuzz(20);

    // 1
    // 2
    // Fizz
    // 3
    // 4
    // Buzz
    // 5
    // Fizz
    // 7
    // 8
    // Fizz
    // Buzz
    // 11
    // Fizz
    // 13
    // 14
    // FizzBuzz
    // 16
    // 17
    // Fizz
    // 19
    // Buzz
    ```

8.  Write a GCD function `gcd(a, b)`

    `gcd(a, b)` returns greatest common divisor (GCD / หรม.) between the pair `a`, `b`

    ```javascript
    gcd(10, 15); // 5
    gcd(18, 12); // 6
    gcd(3, 2); // 1
    ```

9.  Try learning `Array.sort` method (function) with this snippet:

    ```javascript
    const arr = [3, 2, 1, 12, 13, 11];
    arr.sort();

    console.log(arr); // [1, 11, 12, 13, 2, 3]
    ```

    The `sort` method does now work as we expect. Instead of sorting by numeric value,
    it seems the `sort` method sorts elements as strings (hence it did not produce
    `[1, 2, 3, 11, 12, 13]`).

    After learning the root cause, try fixing this problem/implementing your own
    with a `for` loop.

10. Write a function `prime(n)`

    `prime(n)` returns an array of first `n` prime numbers

    ```javascript
    prime(4); // [2, 3, 5, 7]
    prime(5); // [2, 3, 5, 7, 11]
    ```

11. Write a function `drawDown(chart)`

    `drawDown(chart)` returns the biggest downward movement within the chart points

    Where `chart` is points in a chart, represented as an array of numbers:
    `[110, 105, 95, 9, 80, 17, 120, 115, 11]`

    ```javascript
    const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

    drawDown(chart); // 11
    ```

12. Write a function `summarize(text, trail, len)`

    `summarize(text, trail, len)` returns the shortest preview of `text`.

    If `text` fits within `len`, then `summarize` returns the whole text.

    If `text` is longer than `len`, then `summarize` will _truncate_ `text`
    and appends `trail` (e.g. ` ...` with a whitespace at the front) to the return string.

    > The whole return string must fit into `len`, i.e. its length must not exceed `len`.

    The returned text must contain only whole words (i.e. words are separated
    by whitespace ` `). Partial words are not allowed.

    If `len` is smaller than 3, and `text` does not fit `len`,
    `summarize` returns an empty string `""`.

    ```javascript
    const articleCleverse =
      "I am from Cleverse Academy! Today, I’m here to teach you some JavaScript programming";

    summarize(articleCleverse, " ...", 30); // "I am from Cleverse Academy! ..."

    const articleFoo = "Good morning ladies and gentlemen";

    summarize(articleFoo, " ...", 2); // ""
    summarize(articleFoo, " ...", 10); // "Good ..."
    summarize(articleFoo, " ...", 20); // "Good morning ..."
    ```

13. Write a function `filterLt(n, arr)`

    `filterLt(n, arr)` takes in an a number `n` and an array of numbers `arr`,
    and returns a new array containing all elements of `arr` that is lesser than (lt) `n`.

    > Do not use `Array` helper methods - use a simple `for` loop

    ```javascript
    const arr = [120, 112, 111, 130, 169, 101],

    filterLt(0, arr) // []
    filterLt(112, arr) // [111, 101]
    ```

14. Write a function `filterGt(n, arr)`

    `filterGt(n, arr)` performs similar business logic to `filterLt(n, arr)` above,
    but instead of doing a lesser-than test, it does a greater-than test

    ```javascript
    const arr = [120, 112, 111, 130, 169, 101],

    filterGt(0, arr) // [120, 112, 111, 130, 169, 101]
    filterGt(112, arr) // [120, 130, 169]
    ```

15. Write a function `isMember(mem, arr)`

    `isMember(mem, arr)` returns a boolean indicating whether `mem` is a member of `arr`

    > Do not use `Array` helper methods - use a simple `for` loop

    ```javascript
    isMember(5, [1, 3, 7, 12]); // false
    isMember("john", ["jane", "jim", "john"]); // true
    ```

16. Implement a programmable logic to compute compounded return

    Compounded returns are an investment strategy in which the interest income earned
    from the previous period is also invested into the current period.

    This is like how we earn interests from savings accounts.

    The interface (function signature) to this logic should be as simple as `compoundedReturn(amount, interest, n)`
    where `amount` is the amount of fund invested in the 1st period, `interest` is an interest percentage per period,
    and `n` is the number of periods of the investment.

    ```javascript
    compoundedReturn(100, 1, 1); // 101
    compoundedReturn(100, 10, 1); // 110
    compoundedReturn(100, 10, 2); // 121
    ```

17. Write a function `mean(arr)`

    `mean(arr)` returns the mean average value of `arr` dataset (represented as an array).

    If `arr` members are of different types, `mean(arr)` returns `null`

    ```javascript
    mean([1, 2, 3]); // 2
    mean([1, "foo", 3]); // null
    ```

18. Write a function `mode(arr)`

    `mode(arr)` returns the statistical _mode_ from the dataset `arr` (represented as an array).

    A dataset's mode is the value which appears most frequently in a dataset. If none is found,
    or if there are no clear winner, `mode(arr)` returns `null`

    ```javascript
    mode([1, 2, 1, 4, 5, 6, 2, 1]); // 1
    mode([2, 5, 2, 4, 5]); // null
    ```

19. Write a function `mid(arr)`

    `mid(arr)` returns the array containing middle element(s) of array `arr`.

    If the array length is an even number, `mid` returns the 2 middle elements.

    ```javascript
    mid(["john"]); // "john"
    mid(["foo", "bar", "baz"]); // ["bar"]
    mid([1, 2, 3, 4]); // [2, 3]
    ```

20. Write a function `median(arr)`

    `median(arr)` returns the statistical _median_ from the dataset `arr` (represented as an array).

    A dataset's median is the element at the middle of the sorted list. You are allowed to use
    `Array.sort` method for this implementation

    ```javascript
    median([2, 1, 5, 3, 4]); // 3
    ```

21. Write a function `initArr(val, len)`

    `initArr(val, len)` returns an array of length `len` with all members initialized to `val`.

    ```javascript
    initArr(0, 5); // [0, 0, 0, 0, 0]
    ```

22. Write a function `sumAge(arr)`

    `sumAge(arr)` returns the sum of field `age` of every `arr` member
    with the field.

    If a member did not have field `age` or `member.age` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy),
    or not a number, the member is skipped.

    ```javascript
    const arr = [
      { name: "foo", age: 20 },
      { name: "bar", id: 2, age: null },
      { id: 7, age: 3 },
      { type: "dictionary", keys: ["k", "q"], values: [1, 2] },
    ];

    sumAge(arr); // 23
    ```

23. Write a function `avgAge(arr)`

    `avgAge(arr)` works like `sumAge(arr)` above, but instead of summing the age fields,
    `avgAge(arr)` returns the average of members' `age` fields

    ```javascript
    const arr = [
      { name: "foo", age: 20 },
      { name: "bar", id: 2, age: null },
      { id: 7, age: 3 },
      { type: "dictionary", keys: ["k", "q"], values: [1, 2] },
    ];

    avgAge(arr); // 11.5
    ```

24. Write a function `mapAge(arr)`

    `mapAge(arr)` takes in an array of objects `arr`, and returns an array of numbers
    of `arr`'s length, whose element at index `i` maps to the `age` field of `arr[i]`.

    If an `arr` element had [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    `age` field, `null` is used in the return value element.

    ```javascript
    const arr = [
      { name: "foo", age: 20 },
      { name: "bar", id: 2, age: null },
      { id: 7, age: 3 },
      { type: "dictionary", keys: ["k", "q"], values: [1, 2] },
    ];

    mapAge(arr); // [20, null, 3, null]
    ```

25. Write a function `flatMap(arr)`

    `flatMap(arr)` takes in an array of arrays, and returns the flattened array.

    ```javascript
    const arr = [
      [1, 2, 3],
      [100, 200],
      [10, 20],
    ];

    flatMap(arr); // [1, 2, 3, 100, 200, 10, 20]
    ```

26. Write a function `mapMean(arr)`

    `mapMean(arr)` takes in an array of arrays, and returns an array of numbers
    whose element at index `i` maps to the mean average value of `arr[i]`.

    > You are allowed to use `mean(arr)` written above.

    ```javascript
    const arr = [
      [1, 2, 3],
      [100, 200],
      [10, 20],
    ];

    mapMean(arr); // [2, 150, 15]
    ```

27. Write a function `mapMode(arr)`

    `mapMode(arr)` takes in an array of arrays, and returns an array of numbers
    whose element at index `i` maps to the statistical mode of `arr[i]`.

    > You are allowed to use `mode(arr)` written above.

    ```javascript
    const arr = [
      [1, 2, 3, 1],
      [100, 200],
      [10, 20],
    ];

    mapMode(arr); // [1, null, null]
    ```

28. Write a function `countWord(s)`

    `countWord(s)` takes in a string `s` and returns a dictionary object,
    whose keys are the words in `s`, and value being the frequency the key appears
    in `s`.

    Words are defined as string of charaters separated by whitespace(s).

    ```javascript
    const s = "foo bar baz foo foo baz lol lmao";

    countWord(arr);

    // {
    //  foo: 3,
    //  bar: 1,
    //  baz: 2,
    //  lol: 1,
    //  lmao: 1,
    // }
    ```

29. Write a function `unique(arr)`

    `unique(arr)` takes in an array of numbers `arr` and returns a new array
    whose elements are unique.

    > You are not allowed to use `Set`.

    ```javascript
    const arr = [10, 20, 10, 20, 30, 50, 60, 100];

    unique(arr); // [10, 20, 30, 50, 60, 100]
    ```

30. Write a function `markdownToHTML(md)`

    `markdownToHTML(md)` takes in a [Markdown](https://www.markdownguide.org/basic-syntax/)
    string `md` and returns a HTML string parsed from `md`.

    You can just parse the header tags (`<h1>`, `<h2>`, and so on) and the paragraph tag `<p>`
    and ignore the rest of Markdown standard.

    ```javascript
    const md = `
    # This is H1
    
    ## This is H2
    
    This is a paragraph
    `;

    markdownToHTML(md);
    // <h1>This is H1</h1>
    // <h2>This is H2</h2>
    // <p>This is a paragraph</p>
    ```
