// Types that we can check for equality.
// Objects in JavaScript are tested by references
// so they are not included here.
export type Eq = number | string;

export type Optional<T> = T | null | undefined;

export function draw(n: number): void {
  // Prevent infinite loop if n < 0
  if (n < 0) return;

  // Initialize s here so that we don't have
  // to nest 2 loops, which will get expensive
  // if n is large
  let s = "";
  for (let i = 0; i < n; i++) {
    s += "*";
  }

  s += "\n";

  for (let i = 0; i < n; i++) {
    // Print each line
    console.log(s);
  }
}

export function drawNg(n: number): void {
  if (n < 0) return;

  for (let i = 0; i < n; i++) {
    // Initialize s
    let s: string = "";
    for (let j = 0; j < n; j++) {
      s += "*";
    }
    s += "\n";

    // Print each line
    console.log(s);
  }
}

export function maxNegMinPos(arr: number[]): void {
  // These could be null
  let maxNeg: number | null = null;
  let minPos: number | null = null;

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    // The outer if-block is for maxNeg
    if (elem < 0) {
      if (!maxNeg) {
        maxNeg = elem;
        continue;
      }

      if (elem > maxNeg) {
        maxNeg = elem;
        continue;
      }
    }

    // If code reaches here, elem is > 0
    if (!minPos) {
      minPos = elem;
      continue;
    }

    if (elem < minPos) {
      minPos = elem;
    }
  }

  console.log(`MaxNeg is ${maxNeg}\nMinPos is ${minPos}`);
}

export function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

export function mutual<T extends Eq>(a: T[], b: T[]): T[] {
  // Our empty array to store answer
  const answer: T[] = [];

  a.forEach((elemA) => {
    b.forEach((elemB) => {
      if (elemA === elemB) {
        answer.push(elemA);
      }
    });
  });

  return answer;
}

export function fizzBuzz(n: number): void {
  if (n < 0) return;

  for (let i = 0; i < n; i++) {
    if (i % (3 * 5) === 0) {
      console.log("FizzBuzz!");
      continue;
    }
    if (i % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      console.log("Buzz");
      continue;
    }

    console.log(i);
  }
}

export function gcd(a: number, b: number): number {
  while (a !== b) {
    if (a > b) {
      a -= b;
      continue;
    }

    b -= a;
  }

  return a;
}

export function prime(n: number): number[] {
  if (n < 1) return [];

  // Initialize our answers with 2
  const primes: number[] = [2];
  // Start at 3
  let at = 3;

  while (primes.length < n) {
    // Assume `at` is prime number
    // until we can prove otherwise
    let isPrime = true;

    // Prove that `at` is indivisible by
    // **all** members of `primes`
    for (let j = 0; j < primes.length; j++) {
      const p = primes[j];

      // `at` is divisible by p, discard `at`
      // by flagging isPrime as false and
      // break the for-loop
      if (at % p === 0) {
        isPrime = false;
        break;
      }
    }

    // Push to `primes`
    if (isPrime) primes.push(at);

    // Increment `at`
    at++;
  }

  return primes;
}

export function drawDown(chart: number[]): number {
  // No movement, no draw down
  if (chart.length <= 1) return 0;

  let peak = chart[0];
  let maxDown = 0;

  // Slice out the first element
  chart.slice(1).forEach((point) => {
    if (point > peak) {
      // Point is the new peak (graph is going up),
      // draw down not possible
      peak = point;
      return;
    }

    let down = peak - point;
    if (down > maxDown) {
      maxDown = down;
    }
  });

  return maxDown;
}

export function summarize(text: string, trail: string, len: number) {
  // text fits nicely within len
  if (text.length <= len) return text;

  // trail is too long - we can't fit the summary
  // with trail and still be smaller than len anyway.
  if (trail.length >= len) return "";

  // Initialize our summaryWords as array of words
  const summaryWords: string[] = [];

  // summaryLen always include trail length,
  // since we always need `trail` appended to the summary
  let summaryLen = trail.length;

  // Split text into words by whitespaces
  const textWords = text.split(" ");

  for (let i = 0; i < textWords.length; i++) {
    let word = textWords[i];

    // 1 is the length of whitespace character
    // that we need to add when adding a word
    // for constructing the summary sentence.
    const charsToAdd = word.length + 1;

    // If we add this word, the resulting length
    // should not exceed len, or we break this loop.
    //
    // The -1 is for the last word added, which does
    // not have a whitespace separater but is instead
    // joined directly with `trail`.
    if (summaryLen + charsToAdd - 1 > len) {
      break;
    }

    summaryWords.push(word);
    summaryLen += charsToAdd;
  }

  if (summaryWords.length === 0) {
    return "";
  }

  return summaryWords.join(" ") + trail;
}

export function filterLt(n: number, arr: number[]): number[] {
  const lt: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];

    if (v < n) {
      lt.push(v);
    }
  }

  return lt;
}

export function filterGt(n: number, arr: number[]): number[] {
  const gt: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];

    if (v > n) {
      gt.push(v);
    }
  }

  return gt;
}

export function isMember<T extends Eq>(mem: T, arr: T[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) return true;
  }

  return false;
}

// For compoundedReturn
export function periodReturn(amount: number, interest: number): number {
  return amount * (1 + interest);
}

export function compoundedReturn(
  amount: number,
  interestPercent: number,
  periods: number,
): number {
  for (let i = 0; i < periods; i++) {
    amount = periodReturn(amount, interestPercent / 100);
  }

  return amount;
}

export function mean(arr: number[]): number {
  let sum = 0;
  arr.forEach((n) => (sum += n));

  return sum / arr.length;
}

export function mode(arr: number[]): Optional<number> {
  const dict = new Map<number, number>();

  // Count occurrance frequency into dict
  arr.forEach((elem) => {
    let freq = dict.get(elem) || 0;
    dict.set(elem, freq + 1);
  });

  let maxFreq = 0;
  let mode: number | null = null;

  dict.forEach((freq, key) => {
    if (freq === maxFreq) {
      // We got contesting modes:
      // more than 1 keys are candidate for mode,
      // reset mode to null

      mode = null;
      return;
    }

    if (freq > maxFreq) {
      maxFreq = freq;
      mode = key;
    }
  });

  return mode;
}

export function mid<T>(arr: T[]): T[] {
  if (arr.length === 1) return [...arr];

  // Floor the mid index.
  // In JS, this may be a float!
  const _mid = Math.floor(arr.length / 2);

  // Even-length arrays will have 2 middle elements
  if (arr.length % 2 === 0) {
    return [arr[_mid - 1], arr[_mid]];
  }

  return [arr[_mid]];
}

export function median(arr: number[]): number {
  // Copy the sorted array (ascending sort) to `a`
  const a = [...arr];
  a.sort((a, b) => a - b);

  const mids = mid(arr);

  // If there're 2 middle elements,
  // return the average of the two.
  if (mids.length > 1) {
    return mean([mids[0], mids[1]]);
  }

  return mids[0];
}

export function initArr<T>(val: T, len: number): T[] {
  return new Array(len).fill(val);
}

export function flatMap(arr: any[][]): any[] {
  const flattened: any[] = new Array();
  // elem is also an array
  arr.forEach((elem) => flattened.push(...elem));

  return flattened;
}

export function mapMean(arr: number[][]): number[] {
  const means: number[] = new Array(arr.length);
  arr.forEach((elem, i) => (means[i] = mean(elem)));

  return means;
}

export function mapMode(arr: number[][]): Optional<number>[] {
  const modes: Optional<number>[] = new Array(arr.length);
  arr.forEach((elem, i) => (modes[i] = mode(elem)));

  return modes;
}

export function mapRevertSign(arr: number[]): number[] {
  const a: number[] = new Array(arr.length);
  arr.forEach((elem, i) => {
    a[i] = 0 - elem;
  });

  return a;
}

// Don't use `Array.push`, as that will do malloc
// and can get expensive for large arrays
export function reverse<T extends Eq>(arr: T[]): T[] {
  // Do a malloc once, here
  const reversed: T[] = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    reversed[i] = arr[arr.length - 1 - i];
  }

  return reversed;
}

export function toBytes(s: string): number[] {
  // We don't know yet if s contains any non-ASCII char,
  // so we start with empty an array.
  const bytes = new Array();

  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    // Skip any char that does not fit a byte.
    // All ASCII characters fit in a byte (8 bits, 0-255).
    if (char > 255) {
      continue;
    }

    bytes.push(char);
  }

  return bytes;
}

export function transpose<T>(arr: T[], w: number, h: number): Optional<T>[][] {
  if (w < 1 || h < 1) return [];

  // The 2D array-length will be same as the height
  // (i.e. the number of lines)
  const lines: T[][] = new Array(h);

  // The current position in arr
  let at = 0;

  // Fill each row within the image
  outer: for (let i = 0; i < h; i++) {
    const line = new Array(w).fill(null);

    // Fill each column within the line
    for (let j = 0; j < w; j++) {
      if (at > arr.length) {
        break outer;
      }

      line[j] = arr[at];
      at += 1;
    }

    lines[i] = line;
  }

  return lines;
}

export function transposable<T>(arr: T[], w: number, h: number): boolean {
  if (w < 1 || h < 1) return false;

  return arr.length % w === 0 && arr.length % h === 0;
}

export function unique(arr: Eq[]): Eq[] {
  const answer: Eq[] = [];
  arr.forEach((elem) => {
    if (isMember(elem, answer)) {
      return;
    }

    answer.push(elem);
  });

  return answer;
}

// Note: also see function markdownToHTMLDeclarative below
export function markdownToHTML(md: string): string {
  const lines = md.split("\n");
  const htmls: string[] = new Array();

  lines.forEach((line) => {
    if (!line.length) {
      return;
    }

    if (line.startsWith("####")) {
      const content = line.split("#### ")[1];
      htmls.push(`<h4>${content}</h4>`);
      return;
    }

    if (line.startsWith("###")) {
      const content = line.split("### ")[1];
      htmls.push(`<h3>${content}</h3>`);
      return;
    }

    if (line.startsWith("##")) {
      const content = line.split("## ")[1];
      htmls.push(`<h2>${content}</h2>`);
      return;
    }

    if (line.startsWith("#")) {
      const content = line.split("# ")[1];
      htmls.push(`<h1>${content}</h1>`);
      return;
    }

    htmls.push(`<p>${line}</p>`);
  });

  return htmls.join("\n");
}

// More programmable
export function markdownToHTMLDeclarative(md: string): string {
  const headerMapping: [string, string][] = [
    ["#### ", "h4"],
    ["### ", "h3"],
    ["## ", "h2"],
    ["# ", "h1"],
  ];

  const lines = md.split("\n");
  const htmls: string[] = new Array();

  loop_line: for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.length) {
      continue;
    }

    for (let j = 0; j < headerMapping.length; j++) {
      const [key, value] = headerMapping[j];

      // Header gang
      if (line.startsWith("#")) {
        // Start checking from h4 -> h3 -> h2 -> h1
        if (!line.startsWith(key)) {
          // Continue checking other header keys
          continue;
        }

        const content = line.split(key)[1];
        htmls.push(`<${value}>${content}</${value}>`);
        continue loop_line;
      }

      htmls.push(`<p>${line}</p>`);
      continue loop_line;
    }
  }

  return htmls.join("\n");
}
