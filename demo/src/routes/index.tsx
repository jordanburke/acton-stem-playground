import { createFileRoute } from "@tanstack/react-router"
import {
  Container,
  Title,
  Text,
  Card,
  SimpleGrid,
  ThemeIcon,
  Group,
  Badge,
} from "@mantine/core"
import {
  IconSum,
  IconRefresh,
  IconFilter,
  IconTemperature,
  IconUser,
  IconCode,
  IconArrowsLeftRight,
} from "@tabler/icons-react"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <Container size="lg">
      <div style={{ marginBottom: 40 }}>
        <Title order={1} mb="md">
          Welcome to STEM Playground! 🚀
        </Title>
        <Text size="lg" c="dimmed">
          Interactive demos built with React 19, TypeScript, and AI assistance
          from Claude Code
        </Text>
      </div>

      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Group>
          <ThemeIcon size="xl" radius="md" variant="gradient">
            <IconCode size={24} />
          </ThemeIcon>
          <div>
            <Text fw={700} size="lg">
              Built by Students at STEM Exhibit
            </Text>
            <Text size="sm" c="dimmed">
              Every function you see here was created with AI assistance and
              deployed automatically to GitHub Pages
            </Text>
          </div>
        </Group>
      </Card>

      <Title order={2} mb="md">
        Available Demos
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" color="blue">
              <IconSum size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600}>Sum Calculator</Text>
              <Badge size="sm" variant="light">
                Array Operations
              </Badge>
            </div>
          </Group>
          <Text size="sm" c="dimmed">
            Calculate the sum of an array of numbers using reduce
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" color="grape">
              <IconRefresh size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600}>Palindrome Checker</Text>
              <Badge size="sm" variant="light">
                String Manipulation
              </Badge>
            </div>
          </Group>
          <Text size="sm" c="dimmed">
            Check if text reads the same forwards and backwards
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" color="cyan">
              <IconFilter size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600}>Even Numbers</Text>
              <Badge size="sm" variant="light">
                Array Filtering
              </Badge>
            </div>
          </Group>
          <Text size="sm" c="dimmed">
            Filter an array to show only even numbers
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" color="orange">
              <IconTemperature size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600}>Temperature Converter</Text>
              <Badge size="sm" variant="light">
                Unit Conversion
              </Badge>
            </div>
          </Group>
          <Text size="sm" c="dimmed">
            Convert temperatures from Celsius to Fahrenheit
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" color="pink">
              <IconUser size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600}>Person Formatter</Text>
              <Badge size="sm" variant="light">
                Object Formatting
              </Badge>
            </div>
          </Group>
          <Text size="sm" c="dimmed">
            Format person objects with TypeScript interfaces
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mb="md">
            <ThemeIcon size="lg" radius="md" color="violet">
              <IconArrowsLeftRight size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600}>String Reverser</Text>
              <Badge size="sm" variant="light">
                String Manipulation
              </Badge>
            </div>
          </Group>
          <Text size="sm" c="dimmed">
            Reverse any text - letters, words, or entire sentences
          </Text>
        </Card>
      </SimpleGrid>

      <Card shadow="sm" padding="lg" radius="md" withBorder mt="xl">
        <Text fw={600} mb="sm">
          How to Use
        </Text>
        <Text size="sm" c="dimmed" mb="xs">
          1. Click on any demo in the sidebar
        </Text>
        <Text size="sm" c="dimmed" mb="xs">
          2. Enter your values in the input fields
        </Text>
        <Text size="sm" c="dimmed" mb="xs">
          3. See the TypeScript functions in action!
        </Text>
        <Text size="sm" c="dimmed">
          4. View the source code on GitHub to see how it works
        </Text>
      </Card>
    </Container>
  )
}
