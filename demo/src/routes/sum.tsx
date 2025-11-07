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
import { IconSum, IconInfoCircle } from "@tabler/icons-react"
import { sum } from "../lib"

export const Route = createFileRoute("/sum")({
  component: SumDemo,
})

function SumDemo() {
  const [input, setInput] = useState("1, 2, 3, 4, 5")
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    const numbers = input
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n))
    setResult(sum(numbers))
  }

  return (
    <Container size="md">
      <Title order={1} mb="md">
        <IconSum size={32} style={{ verticalAlign: "middle" }} /> Sum
        Calculator
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Calculate the sum of an array of numbers
      </Text>

      <Stack gap="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <TextInput
              label="Enter numbers (comma-separated)"
              placeholder="1, 2, 3, 4, 5"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              size="md"
            />
            <Button onClick={handleCalculate} size="md" fullWidth>
              Calculate Sum
            </Button>
          </Stack>
        </Card>

        {result !== null && (
          <Alert
            icon={<IconInfoCircle />}
            title="Result"
            color="green"
            radius="md"
          >
            <Text size="xl" fw={700}>
              {result}
            </Text>
            <Code block mt="md">
              {`sum([${input}]) = ${result}`}
            </Code>
          </Alert>
        )}

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            How it works
          </Text>
          <Text size="sm" c="dimmed" mb="md">
            The sum function uses JavaScript's reduce method to add all numbers
            together:
          </Text>
          <Code block>{`export const sum = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}`}</Code>
        </Card>
      </Stack>
    </Container>
  )
}
