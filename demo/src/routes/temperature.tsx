import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import {
  Container,
  Title,
  Text,
  NumberInput,
  Button,
  Card,
  Code,
  Stack,
  Alert,
} from "@mantine/core"
import { IconTemperature, IconInfoCircle } from "@tabler/icons-react"
import { celsiusToFahrenheit } from "../lib"

export const Route = createFileRoute("/temperature")({
  component: TemperatureDemo,
})

function TemperatureDemo() {
  const [celsius, setCelsius] = useState<number>(20)
  const [fahrenheit, setFahrenheit] = useState<number | null>(null)

  const handleConvert = () => {
    setFahrenheit(celsiusToFahrenheit(celsius))
  }

  return (
    <Container size="md">
      <Title order={1} mb="md">
        <IconTemperature size={32} style={{ verticalAlign: "middle" }} />{" "}
        Temperature Converter
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Convert temperatures from Celsius to Fahrenheit
      </Text>

      <Stack gap="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <NumberInput
              label="Temperature in Celsius"
              placeholder="20"
              value={celsius}
              onChange={(val) => setCelsius(Number(val))}
              size="md"
            />
            <Button onClick={handleConvert} size="md" fullWidth>
              Convert to Fahrenheit
            </Button>
          </Stack>
        </Card>

        {fahrenheit !== null && (
          <Alert
            icon={<IconInfoCircle />}
            title="Result"
            color="orange"
            radius="md"
          >
            <Text size="xl" fw={700}>
              {celsius}°C = {fahrenheit}°F
            </Text>
            <Code block mt="md">
              {`celsiusToFahrenheit(${celsius}) = ${fahrenheit}`}
            </Code>
          </Alert>
        )}

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            How it works
          </Text>
          <Text size="sm" c="dimmed" mb="md">
            The function uses the formula: F = (C × 9/5) + 32
          </Text>
          <Code block>{`export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32
}`}</Code>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={600} mb="sm">
            Common temperatures:
          </Text>
          <Text size="sm" mb="xs">• 0°C = 32°F (Freezing point of water)</Text>
          <Text size="sm" mb="xs">• 20°C = 68°F (Room temperature)</Text>
          <Text size="sm" mb="xs">• 37°C = 98.6°F (Human body temperature)</Text>
          <Text size="sm" mb="xs">• 100°C = 212°F (Boiling point of water)</Text>
        </Card>
      </Stack>
    </Container>
  )
}
