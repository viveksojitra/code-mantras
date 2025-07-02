import { greetings } from "../src/index.js";

describe("Code Mantras Tests", () => {
  test("Returns a string", () => {
    expect(typeof greetings()).toBe("string");
  });

  test("Includes name when provided", () => {
    const result = greetings("Alice");
    expect(result).toContain("Alice");
  });

  test("Returns greeting without name", () => {
    const result = greetings();
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  test("Capitalizes names properly", () => {
    const result = greetings("john doe");
    expect(result).toContain("John Doe");
  });

  test("Returns different messages (randomness check)", () => {
    const messages = new Set();
    // Test multiple times to check randomness
    for (let i = 0; i < 50; i++) {
      messages.add(greetings());
    }
    expect(messages.size).toBeGreaterThan(1);
  });
});
