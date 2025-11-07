/**
 * A simple hello world function
 */
export const helloWorld = () => {
  const helloWorld = "Hello World!"
  console.log(helloWorld)
  return "Hello World!"
}

/**
 * Calculates the sum of an array of numbers
 * @param numbers - Array of numbers to sum
 * @returns The sum of all numbers
 */
export const sum = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

/**
 * Checks if a string is a palindrome
 * @param str - String to check
 * @returns true if the string is a palindrome, false otherwise
 */
export const isPalindrome = (str: string): boolean => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  return cleaned === cleaned.split("").reverse().join("")
}

/**
 * Filters an array to only include even numbers
 * @param numbers - Array of numbers to filter
 * @returns Array containing only even numbers
 */
export const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0)
}

/**
 * Converts a temperature from Celsius to Fahrenheit
 * @param celsius - Temperature in Celsius
 * @returns Temperature in Fahrenheit
 */
export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32
}

/**
 * Person interface for type demonstration
 */
export interface Person {
  name: string
  age: number
  email?: string
}

/**
 * Formats a person's information as a string
 * @param person - Person object to format
 * @returns Formatted string
 */
export const formatPerson = (person: Person): string => {
  const emailPart = person.email ? ` (${person.email})` : ""
  return `${person.name}, ${person.age} years old${emailPart}`
}
