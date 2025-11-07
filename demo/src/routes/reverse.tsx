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
import { IconArrowsLeftRight, IconInfoCircle } from "@tabler/icons-react"
import { reverseString } from "../lib"

export const Route = createFileRoute("/reverse")({
  component: ReverseDemo,
})

function ReverseDemo() {
  const [input, setInput] = useState("Hello World!")
  const [result, setResult] = useState<string | null>(null)

  const handleReverse = () => {
    setResult(reverseString(input))
  }

  return (
    <Container size="md">
      <Title order={1} mb="md">
        <IconArrowsLeftRight size={32} style={{ verticalAlign: "middle" }} />{" "}
        String Reverser
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Reverse any text - letters, words, or sentences
      </Text>

      <Stack gap="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <TextInput
              label="Enter text to reverse"
              placeholder="Hello World!"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              size="md"
            />
            <Button onClick={handleReverse} size="md" fullWidth>
              Reverse String
            </Button>
          </Stack>
        </Card>

        {result !== null && (
          <Alert
            icon={<IconInfoCircle />}
            title="Result"
            color="violet"
            radius="md"
          >
            <Text size="xl" fw={700}>
              {result}
            </Text>
            <Code block mt="md">
              {`reverseString("${input}") = "${result}"`}
            </Code>
          </Alert>
        )}

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            How it works
          </Text>
          <Text size="sm" c="dimmed" mb="md">
            The function splits the string into characters, reverses the array,
            and joins them back:
          </Text>
          <Code block>{`export const reverseString = (str: string): string => {
  return str.split("").reverse().join("")
}`}</Code>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            Try these examples:
          </Text>
          <Text size="sm" mb="xs">
            • "Hello World!" → "!dlroW olleH"
          </Text>
          <Text size="sm" mb="xs">
            • "12345" → "54321"
          </Text>
          <Text size="sm" mb="xs">• "racecar" → "racecar" (palindrome!)</Text>
          <Text size="sm">• Your name reversed!</Text>
        </Card>
      </Stack>
    </Container>
  )
}
