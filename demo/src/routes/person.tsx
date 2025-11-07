import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import {
  Container,
  Title,
  Text,
  TextInput,
  NumberInput,
  Button,
  Card,
  Code,
  Stack,
  Alert,
} from "@mantine/core"
import { IconUser, IconInfoCircle } from "@tabler/icons-react"
import { formatPerson, type Person } from "../lib"

export const Route = createFileRoute("/person")({
  component: PersonDemo,
})

function PersonDemo() {
  const [name, setName] = useState("Alice")
  const [age, setAge] = useState<number>(30)
  const [email, setEmail] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const handleFormat = () => {
    const person: Person = { name, age }
    if (email) person.email = email
    setResult(formatPerson(person))
  }

  return (
    <Container size="md">
      <Title order={1} mb="md">
        <IconUser size={32} style={{ verticalAlign: "middle" }} /> Person
        Formatter
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Format person objects with TypeScript interfaces
      </Text>

      <Stack gap="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <TextInput
              label="Name"
              placeholder="Alice"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="md"
              required
            />
            <NumberInput
              label="Age"
              placeholder="30"
              value={age}
              onChange={(val) => setAge(Number(val))}
              size="md"
              min={0}
              max={150}
              required
            />
            <TextInput
              label="Email (optional)"
              placeholder="alice@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="md"
              type="email"
            />
            <Button onClick={handleFormat} size="md" fullWidth>
              Format Person
            </Button>
          </Stack>
        </Card>

        {result !== null && (
          <Alert
            icon={<IconInfoCircle />}
            title="Result"
            color="pink"
            radius="md"
          >
            <Text size="lg" fw={700}>
              {result}
            </Text>
            <Code block mt="md">
              {`formatPerson(${JSON.stringify({ name, age, ...(email && { email }) }, null, 2)})`}
            </Code>
          </Alert>
        )}

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            TypeScript Interface
          </Text>
          <Text size="sm" c="dimmed" mb="md">
            The Person interface ensures type safety:
          </Text>
          <Code block>{`export interface Person {
  name: string
  age: number
  email?: string  // optional
}

export const formatPerson = (person: Person): string => {
  const emailPart = person.email ? \` (\${person.email})\` : ""
  return \`\${person.name}, \${person.age} years old\${emailPart}\`
}`}</Code>
        </Card>
      </Stack>
    </Container>
  )
}
