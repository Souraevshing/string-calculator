export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(\[.*?\]|.)\n/);
      if (match) {
        let customDelim = match[1];

        if (customDelim.startsWith("[") && customDelim.endsWith("]")) {
          customDelim = customDelim.slice(1, -1);
        }

        delimiter = new RegExp(
          customDelim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );
        numbers = numbers.slice(match[0].length);
      }
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter((num) => num < 0);

    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
  }
}
