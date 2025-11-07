import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import {
  Container,
  Title,
  Text,
  TextInput,
  Button,
  Card,
  Code,
  Stack,
  Alert,
} from "@mantine/core"
import { IconRefresh, IconCheck, IconX } from "@tabler/icons-react"
import { isPalindrome } from "../lib"

export const Route = createFileRoute("/palindrome")({
  component: PalindromeDemo,
})

function PalindromeDemo() {
  const [input, setInput] = useState("racecar")
  const [result, setResult] = useState<boolean | null>(null)

  const handleCheck = () => {
    setResult(isPalindrome(input))
  }

  return (
    <Container size="md">
      <Title order={1} mb="md">
        <IconRefresh size={32} style={{ verticalAlign: "middle" }} />{" "}
        Palindrome Checker
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Check if text reads the same forwards and backwards
      </Text>

      <Stack gap="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <TextInput
              label="Enter text to check"
              placeholder="A man, a plan, a canal: Panama"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              size="md"
            />
            <Button onClick={handleCheck} size="md" fullWidth>
              Check Palindrome
            </Button>
          </Stack>
        </Card>

        {result !== null && (
          <Alert
            icon={result ? <IconCheck /> : <IconX />}
            title="Result"
            color={result ? "green" : "red"}
            radius="md"
          >
            <Text size="xl" fw={700}>
              {result ? "✓ YES - It's a palindrome!" : "✗ NO - Not a palindrome"}
            </Text>
            <Code block mt="md">
              {`isPalindrome("${input}") = ${result}`}
            </Code>
          </Alert>
        )}

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            How it works
          </Text>
          <Text size="sm" c="dimmed" mb="md">
            The function ignores case, spaces, and punctuation, then checks if
            the text reads the same backwards:
          </Text>
          <Code block>{`export const isPalindrome = (str: string): boolean => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  return cleaned === cleaned.split("").reverse().join("")
}`}</Code>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            Try these examples:
          </Text>
          <Text size="sm" mb="xs">• "racecar" - Simple palindrome</Text>
          <Text size="sm" mb="xs">• "A man, a plan, a canal: Panama" - With punctuation</Text>
          <Text size="sm" mb="xs">• "hello" - Not a palindrome</Text>
        </Card>
      </Stack>
    </Container>
  )
}
