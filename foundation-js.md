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

4.  Write a function `fib(n)`

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

5.  Write a function `mutual(arr1, arr2)`

    `mutual(arr1, arr2)` returns a new array containing all mutual
    members of `arr1` and `arr2`

    ```javascript
    const class1 = ["Alice", "Bob", "John", "Jane"];
    const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

    console.log(mutual(class1, class2)); // ["John", "Bob"]
    ```

6.  Write a `fizzBuzz(n)` function

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

7.  Write a GCD function `gcd(a, b)`

    `gcd(a, b)` returns greatest common divisor (GCD / หรม.) between the pair `a`, `b`

    ```javascript
    gcd(10, 15); // 5
    gcd(18, 12); // 6
    gcd(3, 2); // 1
    ```

8.  Try learning `Array.sort` method (function) with this snippet:

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

9.  Write a function `prime(n)`

    `prime(n)` returns an array of first `n` prime numbers

    ```javascript
    prime(4); // [2, 3, 5, 7]
    prime(5); // [2, 3, 5, 7, 11]
    ```

10. Write a function `drawDown(chart)`

    `drawDown(chart)` returns the biggest downward movement within the chart points

    Where `chart` is points in a chart, represented as an array of numbers:
    `[110, 105, 95, 9, 80, 17, 120, 115, 11]`

    ```javascript
    const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

    drawDown(chart); // 11
    ```

11. Write a function `summarize(text, trail, len)`

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

12. Write a function `filterLt(n, arr)`

    `filterLt(n, arr)` takes in an a number `n` and an array of numbers `arr`,
    and returns a new array containing all elements of `arr` that is lesser than (lt) `n`.

    > Do not use `Array` helper methods - use a simple `for` loop

    ```javascript
    const arr = [120, 112, 111, 130, 169, 101],

    filterLt(0, arr) // []
    filterLt(112, arr) // [111, 101]
    ```

13. Write a function `filterGt(n, arr)`

    `filterGt(n, arr)` performs similar business logic to `filterLt(n, arr)` above,
    but instead of doing a lesser-than test, it does a greater-than test

    ```javascript
    const arr = [120, 112, 111, 130, 169, 101],

    filterGt(0, arr) // [120, 112, 111, 130, 169, 101]
    filterGt(112, arr) // [120, 130, 169]
    ```

14. Write a function `isMember(mem, arr)`

    `isMember(mem, arr)` returns a boolean indicating whether `mem` is a member of `arr`

    > Do not use `Array` helper methods - use a simple `for` loop

    ```javascript
    isMember(5, [1, 3, 7, 12]); // false
    isMember("john", ["jane", "jim", "john"]); // true
    ```

15. Implement a programmable logic to compute compounded return

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

16. Write a function `mean(arr)`

    `mean(arr)` returns the mean average value of `arr` dataset (represented as an array).

    If any one of `arr` members are of non-`number` type, `mean(arr)` returns `null`

    ```javascript
    mean([1, 2, 3]); // 2
    mean([1, "foo", 3]); // null
    ```

17. Write a function `mode(arr)`

    `mode(arr)` returns the statistical _mode_ from the dataset `arr` (represented as an array).

    A dataset's mode is the value which appears most frequently in a dataset. If none is found,
    or if there are no clear winner, `mode(arr)` returns `null`

    ```javascript
    mode([1, 2, 1, 4, 5, 6, 2, 1]); // 1
    mode([2, 5, 2, 4, 5]); // null
    ```

18. Write a function `mid(arr)`

    `mid(arr)` returns the array containing middle element(s) of array `arr`.

    If the array length is an even number, `mid` returns the 2 middle elements.

    ```javascript
    mid(["john"]); // "john"
    mid(["foo", "bar", "baz"]); // ["bar"]
    mid([1, 2, 3, 4]); // [2, 3]
    ```

19. Write a function `median(arr)`

    `median(arr)` returns the statistical _median_ from the dataset `arr` (represented as an array).

    A dataset's median is the element at the middle of the sorted list. You are allowed to use
    `Array.sort` method for this implementation

    ```javascript
    median([2, 1, 5, 3, 4]); // 3
    ```

20. Write a function `initArr(val, len)`

    `initArr(val, len)` returns an array of length `len` with all members initialized to `val`.

    ```javascript
    initArr(0, 5); // [0, 0, 0, 0, 0]
    ```

21. Write a function `flatMap(arr)`

    `flatMap(arr)` takes in an array of arrays, and returns the flattened array.

    ```javascript
    const arr = [
      [1, 2, 3],
      [100, 200],
      [10, 20],
    ];

    flatMap(arr); // [1, 2, 3, 100, 200, 10, 20]
    ```

22. Write a function `mapMean(arr)`

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

23. Write a function `mapMode(arr)`

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

24. Write a function `mapRevertSign(arr)`

    `mapRevertSign(arr)` takes in an array of numbers, and returns a new array
    of numbers containing opposite signs of the original array.

    ```javascript
    const arr = [1, -4, 2, 0];

    mapRevertSign(arr); // [-1, 4, -2, 0]
    ```

25. Write a function `reverse(arr)`

    `reverse(arr)` returns a new array which is `arr` reversed.

    > You are not allowed to use `Array.reverse` method.

    ```javascript
    const arr = [1, 2, 3, 4, 5];
    reverse(arr); // [5, 4, 3, 2, 1]
    ```

26. Write a function `unique(arr)`

    `unique(arr)` takes in an array of numbers `arr` and returns a new array
    whose elements are unique.

    > You are not allowed to use `Set`, but using `isMember` above is allowed.

    ```javascript
    const arr = [10, 20, 10, 20, 30, 50, 60, 100];

    unique(arr); // [10, 20, 30, 50, 60, 100]
    ```

27. Write a function `toBytes(s)`

    `toBytes(s)` takes in a string `s` and returns an array of ASCII bytes.
    formed by `s`.

    If a character in `s` is invalid ASCII, the character is omitted
    from the returned array.

    ```javascript
    const bar = "Bar";
    const foo = "Foo";
    const fooFire = "Foo🔥";

    toBytes(bar); // [ 66, 97, 114 ]
    toBytes(foo); // [ 70, 111, 111 ]
    toBytes(fooFire); // [ 70, 111, 111 ] because the emoji is invalid ASCII
    ```

28. Write a function `transpose(bits, w, h)`

    `transpose(bits, w, h)` transposes an array `bits` into arrays of arrays,
    based on the value of `w`, `h`, and to some extent `bits`.

    For example, consider this scenario:
    **we are working on a image processing engine**.

    The image files are represented on disks or in memory as just a
    long list (array) of bytes, much like any files:

    ```javascript
    // How files are represented on disk as arrays of bits,
    // and when they are first loaded to memory.
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0];
    ```

    Now, let's assume that the image file format for our programs are just
    simple 1-bit [bitmap](https://en.wikipedia.org/wiki/Bitmap) files,
    that is, each bit represent a pixel, with `0` being a black pixel
    and `1` being a white one.

    Although our simple app is only limited to processing 1-bit images,
    the resolution (the width and the height of the image) can vary file by file.

    Without image compression, this means that larger images will have larger files,
    and thus longer arrays to represent the images.

    Because displays are 2D in nature - to display the bitmap image, we need
    to do some transposing when rendering images.

    And because the width and height of images may vary,
    we need a way to map the 1D array into 2D one.

    Implement the function that can performs the following operations:

    ```javascript
    const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
    transpose(imageBytes, 8, 2);
    // [
    //  [1, 0, 1, 0, 0, 0, 0, 0] // => the 1st row of pixels of imageBytes
    //  [1, 0, 1, 0, 1, 1, 1, 1] // => the 2nd row of pixels of imageBytes
    // ]

    transpose(imageBytes, 2, 8); // The same array, but now 2x8
    // [
    //  [1, 0] => the 1st row of this rendition of the image
    //  [1, 0] => the 2nd row
    //  [0, 0] => the 3rd row
    //  [0, 0] => the 4th row
    //  [1, 0] => the 5th row
    //  [1, 0] => the 6th row
    //  [1, 1] => the 7th row
    //  [1, 1] => the 8th row
    // ]
    ```

29. Write a function `transposable(arr, w, h)`

    > Related to `transpose(arr, w, h)` above

    `transposable(arr, w, h)` returns a boolean, indicating whether the array `arr`
    could be transposed with `w` and `h`.

    An array would be transpose with `w` and `h` if the transposed arrays all
    contains the same length, that is, they can form a rectangle.

    > You are allowed to use `gcd(a, b)` from above.

    ```javascript
    const image = [1, 0, 1, 0, 1, 1]; // len = 6
    transposable(image, 2, 3); // true
    transposable(image, 6, 1); // true
    transposable(image, 4, 2); // false
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
