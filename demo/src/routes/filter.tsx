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
  Badge,
  Group,
} from "@mantine/core"
import { IconFilter, IconInfoCircle } from "@tabler/icons-react"
import { filterEvenNumbers } from "../lib"

export const Route = createFileRoute("/filter")({
  component: FilterDemo,
})

function FilterDemo() {
  const [input, setInput] = useState("1, 2, 3, 4, 5, 6, 7, 8")
  const [result, setResult] = useState<number[] | null>(null)

  const handleFilter = () => {
    const numbers = input
      .split(",")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n))
    setResult(filterEvenNumbers(numbers))
  }

  return (
    <Container size="md">
      <Title order={1} mb="md">
        <IconFilter size={32} style={{ verticalAlign: "middle" }} /> Even
        Number Filter
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Filter an array to show only even numbers
      </Text>

      <Stack gap="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <TextInput
              label="Enter numbers (comma-separated)"
              placeholder="1, 2, 3, 4, 5, 6, 7, 8"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              size="md"
            />
            <Button onClick={handleFilter} size="md" fullWidth>
              Filter Even Numbers
            </Button>
          </Stack>
        </Card>

        {result !== null && (
          <Alert
            icon={<IconInfoCircle />}
            title="Result"
            color="cyan"
            radius="md"
          >
            <Text mb="sm">Even numbers:</Text>
            <Group gap="xs" mb="md">
              {result.map((num, idx) => (
                <Badge key={idx} size="lg" variant="filled">
                  {num}
                </Badge>
              ))}
              {result.length === 0 && (
                <Text size="sm" c="dimmed">
                  No even numbers found
                </Text>
              )}
            </Group>
            <Code block>
              {`filterEvenNumbers([${input}]) = [${result.join(", ")}]`}
            </Code>
          </Alert>
        )}

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            How it works
          </Text>
          <Text size="sm" c="dimmed" mb="md">
            The function uses filter to keep only numbers divisible by 2:
          </Text>
          <Code block>{`export const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0)
}`}</Code>
        </Card>
      </Stack>
    </Container>
  )
}
