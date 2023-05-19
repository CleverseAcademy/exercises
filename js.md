# Basic JavaScript exercises

1. Write a function `sumAge(arr)`

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

2. Write a function `avgAge(arr)`

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

3. Write a function `mapAge(arr)`

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

4. Write a function `countWord(s)`

   `countWord(s)` takes in a string `s` and returns a dictionary object,
   whose keys are the words in `s`, and value being the frequency the key appears
   in `s`.

   Words are defined as string of charaters separated by whitespace(s).

   ```javascript
   const s = "foo bar baz foo foo baz lol lmao";

   countWord(s);

   // {
   //  foo: 3,
   //  bar: 1,
   //  baz: 2,
   //  lol: 1,
   //  lmao: 1,
   // }
   ```
