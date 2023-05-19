# Testing exercises

We provide unit tests for all of the problems.

The tests use [`jest`](https://jestjs.io/),
so you need a Node module environment to test
your solutions.

Luckily, this repository is
already a node module, so you can test your
solutions inside of your local copy of this
repository.

> Tests are written in TypeScript, because why not?

## Testing your own solutions

1. Preparing directory

   Clone this repository, and copy your
   solutions into the local repository
   directory:

   ```shell
   # Clone this repo into directory _exercises
   git clone https://github.com/CleverseAcademy/exercises _exercises;

   # Copy your solutions to the
   cp your_solutions.ts _exercises/;
   ```

2. Initialize dependencies

   ```shell
   cd _exercises;
   npm install;
   ```

3. Edit test file to import your file's symbols

   Now go to the import section of the copied
   test file, and update the import file to be
   your own solution file(s).

4. Run tests

   ```shell
   npx jest;
   ```
