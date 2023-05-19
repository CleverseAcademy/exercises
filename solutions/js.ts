export type OptionalNumber = number | null;

export function maxNegMinPosObj(arr: number[]): {
  maxNeg: OptionalNumber;
  minPos: OptionalNumber;
} {
  // These could be null
  let maxNeg: OptionalNumber = null;
  let minPos: OptionalNumber = null;

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

export function mapAge(arr: any[]): OptionalNumber[] {
  const ages: OptionalNumber[] = new Array(arr.length).fill(null);
  arr.forEach((elem, i) => {
    if (typeof elem.age === "number") {
      ages[i] = elem.age;
    }
  });

  return ages;
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
