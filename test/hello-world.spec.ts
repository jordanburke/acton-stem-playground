import { beforeEach, describe, expect, it } from "vitest"

import { celsiusToFahrenheit, filterEvenNumbers, formatPerson, helloWorld, isPalindrome, sum } from "../src"

describe("HelloWorld", () => {
  beforeEach(async () => {
    // Nothing
  })
  const test = helloWorld()

  it("should return Hello World", () => {
    expect(test).toBe("Hello World!")
  })
})

describe("sum", () => {
  it("should sum an array of numbers", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15)
  })

  it("should return 0 for empty array", () => {
    expect(sum([])).toBe(0)
  })

  it("should handle negative numbers", () => {
    expect(sum([-1, -2, -3])).toBe(-6)
  })

  it("should handle mixed positive and negative numbers", () => {
    expect(sum([10, -5, 3, -2])).toBe(6)
  })
})

describe("isPalindrome", () => {
  it("should return true for simple palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true)
    expect(isPalindrome("level")).toBe(true)
  })

  it("should return false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false)
    expect(isPalindrome("world")).toBe(false)
  })

  it("should ignore case", () => {
    expect(isPalindrome("RaceCar")).toBe(true)
  })

  it("should ignore spaces and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
  })
})

describe("filterEvenNumbers", () => {
  it("should filter only even numbers", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6])
  })

  it("should return empty array when no even numbers", () => {
    expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([])
  })

  it("should handle empty array", () => {
    expect(filterEvenNumbers([])).toEqual([])
  })

  it("should include zero as even", () => {
    expect(filterEvenNumbers([0, 1, 2])).toEqual([0, 2])
  })
})

describe("celsiusToFahrenheit", () => {
  it("should convert freezing point", () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
  })

  it("should convert boiling point", () => {
    expect(celsiusToFahrenheit(100)).toBe(212)
  })

  it("should convert room temperature", () => {
    expect(celsiusToFahrenheit(20)).toBe(68)
  })

  it("should handle negative temperatures", () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40)
  })
})

describe("formatPerson", () => {
  it("should format person without email", () => {
    const person = { name: "Alice", age: 30 }
    expect(formatPerson(person)).toBe("Alice, 30 years old")
  })

  it("should format person with email", () => {
    const person = { name: "Bob", age: 25, email: "bob@example.com" }
    expect(formatPerson(person)).toBe("Bob, 25 years old (bob@example.com)")
  })
})
