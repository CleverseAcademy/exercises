# Exercise solutions

We provide TypeScript solutions for the problem.

The reason TypeScript is used is to minimize the
debugging time. You obviously don't want to debug
random code problems without a type system.

- [Solutions for foundation JavaScript exercises](./foundation-js.ts)

- [Solutions for JavaScript exercises](./js.ts)

## On the solutions

Programming problem, like any problems,
can be solved in many ways.

People solve simple problems with overengineered,
or very complicated solutions all the time.

When solving a problem, consider these 3 points:

1. The problem must be _solved correctly_

   In software development terms, the code must be
   correct. When testing, the output of a function
   or a program must match the expected value.

   A faulty solution looks like this:

   ```typescript
   function mid<T>(arr: T[]): T {
     return arr[arr.length / 2];
   }
   ```

   The problem with this is that, in JavaScript, the number
   types are all floating points. This means that if `arr.length`
   is some even numbers, `mid` will return `undefined`.

2. The exceptions present in the problem must be handled

   Most problems have known exceptions, that may or
   may not be fatal.

   For example, let's say you write a function `index`
   that just indexes an array for the caller:

   ```typescript
   function index<T>(arr: T[], idx: number): T {
     return arr[idx];
   }
   ```

   It seems that `index` will always succeed - that
   this business logic has virtually 0 places to fail.

   But upon close examinations, we can see that indexing
   an array can always cause our programs to panic (crash)
   _if_ the index is out of range.

   That being said, `index` could crash our program if the
   caller is not careful enough.

   So instead, if we really want to have 1 function for
   array indexing, and we want to _encapsulate_ the fact
   that this indexing operation may yield nothing if the
   index is out range, we could rewrite `index` like so:

   ```typescript
   function index<T>(arr: T[], idx: number): T | undefined {
     if (arr.length > idx) return undefined;

     return arr[idx];
   }
   ```

   This way, the caller knows (by the function signature)
   that the indexing operation may yield nothing if `idx`
   is out of range.

3. The problem must be solve efficiently, and optimally

   Although computers have become much more powerful,
   they are still resources, and resources are limited.

   When writing code, programmers will try to minimize
   _costs_ of running their programs. Computing costs
   come in many forms - CPU time, memory, network, and
   many more.

   Hence, one thing that programmers usually do when
   writing code is that they will always try to minimize
   the [running time](https://en.wikipedia.org/wiki/Time_complexity)
   of their code.

   Running time is important, especially in today's
   applications, where there's huge data and entities
   in our software.

   Optimizing running time validates the use of more
   exotic data structures such as hash maps or trees.

   The solutions here will try to minimize the running
   time as much as possible, although in some solutions
   (such as the foundation JavaScript exercises), we have
   intentionally omit the use of some clever data structures
   in order to make it more readable/comprehendable by our
   participants in their earlier phases.

   For example, consider this code, which draws an _n x n_
   matrix of stars `*`:

   ```typescript
   function draw(n: number) {
     for (let i = 0; i < n; i++) {
       line = "";
       for (let j = 0; j < n; j++) {
         line += "*";
       }
       console.log(line);
     }
   }
   ```

   `draw` is correct, but it is not efficient. The business logic
   of `draw` requires that the function prints `n`-wide starts for
   `n` lines.

   In this implementation, `draw` constructs `line` everytime it
   iterates over `i` and `j`. This means that, if `n` is, say,
   `10000`, this code would have iterates over `j` for a hundred
   million times. This is because `draw` above runs at O(n<sup>2</sup>).

   Instead, `draw` could be written like this:

   ```typescript
   function draw(n: number): void {
     if (n < 0) return;

     // Initialize s here so that we don't have
     // to nest 2 loops, which will get expensive
     // if n is large
     let line = "";
     for (let i = 0; i < n; i++) {
       line += "*";
     }

     line += "\n";

     for (let i = 0; i < n; i++) {
       // Print each line
       console.log(line);
     }
   }
   ```

   In this implementatio, we construct `line` only once,
   before we iterate to print it `n` times. This implementation
   of `draw` only takes O(n).

   This time, if `n` is `10000`, it would have cost
   `10000` times more efficient than the previous implementation,
   and a million times more efficient if `n` is that large.

   However, there's still some more quirks to optimize - the newline
   charater. `console.log` by default appends a `\n` at the end of
   the expression it takes in. This means that we could have just
   remove the `line += "\n"` expression from our `draw`, and our
   program would have been a tiny bit faster.

The solutions provided here are _optimal_ solutions, **except
the solutions for [Foundation JavaScript**](./foundation-js.ts),
which only uses `Array` to solve problems.
