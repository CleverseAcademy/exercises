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

export function maxNegMinPosObj(arr: number[]): {
  maxNeg: number | null;
  minPos: number | null;
} {
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

  return { maxNeg, minPos };
}

export function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// Types that we can check for equality.
// Objects in JavaScript are tested by references
// so they are not included here.
export type Eq = number | string;

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

  for (let i = 3; ; i++) {
    if (primes.length === n) {
      break;
    }

    // Assume i is prime number
    // until we can prove otherwise
    let isPrime = true;

    for (let j = 0; j < primes.length; j++) {
      const p = primes[j];

      // i is divisible by p, discard i
      if (i % p === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(i);
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

  // Initialize our summaryWords
  const summaryWords: string[] = [];

  // summaryLen always include trailing string length,
  // since we always need it if we had to truncate text
  let summaryLen = 0 + trail.length;

  // Split text into words by whitespaces
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // 1 is the length of whitespace character
    // that we need to add when adding a word
    // for constructing the summary sentence.
    const charsToAdd = word.length + 1;

    // If we add this word, the resulting length
    // should not exceed len, or we end this loop.
    if (summaryLen + charsToAdd > len) {
      break;
    }

    summaryWords.push(word);
    summaryLen += word.length;
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

export type optionalNumber = number | null;

export function mode(arr: number[]): optionalNumber {
  const dict = new Map<number, number>();
  arr.forEach((elem) => {
    let freq = dict.get(elem) || 0;
    dict.set(elem, freq + 1);
  });

  let maxFreq = 0;
  let mode: number | null = null;
  dict.forEach((freq, key) => {
    // We got contesting modes:
    // more than 1 keys are candidate for mode
    if (freq === maxFreq) {
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

export function sumAge(arr: any[]): number {
  let sum = 0;
  arr.forEach((elem) => {
    if (typeof elem.age === "number") {
      sum += elem.age;
    }
  });

  return sum;
}

export function avgAge(arr: any[]): number {
  return sumAge(arr) / arr.length;
}

export function mapAge(arr: any[]): optionalNumber[] {
  const ages: optionalNumber[] = new Array(arr.length).fill(null);
  arr.forEach((elem, i) => {
    if (typeof elem.age === "number") {
      ages[i] = elem.age;
    }
  });

  return ages;
}

export function flatMap(arr: any[][]): any[] {
  const flattened = new Array();
  // elem is also an array
  arr.forEach((elem) => flattened.push(...elem));

  return flattened;
}

export function mapMean(arr: number[][]): number[] {
  const means: number[] = new Array(arr.length);
  arr.forEach((elem, i) => (means[i] = mean(elem)));

  return means;
}

export function mapMode(arr: number[][]): optionalNumber[] {
  const modes: optionalNumber[] = new Array(arr.length);
  arr.forEach((elem, i) => (modes[i] = mode(elem)));

  return modes;
}

export function countWord(s: string): any {
  const words = s.split(" ");
  const answer: any = {};
  words.forEach((word) => {
    const freq = answer[word];
    if (freq) {
      answer[word] += 1;
      return;
    }

    answer[word] = 1;
  });

  return answer;
}

// Same as countWord, but with Map
export function countWordMap(s: string): any {
  const words = s.split(" ");
  const freqs: Map<string, number> = new Map();

  words.forEach((word) => {
    const freq = freqs.get(word) || 0;
    freqs.set(word, freq + 1);
  });

  return freqs;
}

export function unique(arr: number[]): number[] {
  const answer: number[] = [];
  arr.forEach((elem) => {
    if (isMember(elem, answer)) {
      return;
    }

    answer.push(elem);
  });

  return answer;
}

export function markdownToHTML(md: string): string {
  const lines = md.split("\n");
  const htmls: string[] = new Array();

  lines.forEach((line, i) => {
    if (!line.length) {
      return;
    }

    if (line.startsWith("####")) {
      const content = line.split("#### ");
      htmls.push(`<h4>${content}</h4>`);
      return;
    }

    if (line.startsWith("###")) {
      const content = line.split("### ");
      htmls.push(`<h3>${content}</h3>`);
      return;
    }

    if (line.startsWith("##")) {
      const content = line.split("## ");
      htmls.push(`<h2>${content}</h2>`);
      return;
    }

    if (line.startsWith("#")) {
      const content = line.split("# ");
      htmls.push(`<h1>${content}</h1>`);
      return;
    }

    htmls.push(`<p>${line}</p>`);
  });

  return htmls.join("\n");
}

// More programmable
export function markdownToHTMLDeclarative(md: string): string {
  const headerMapping: string[][] = [
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
