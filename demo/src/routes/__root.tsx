import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { AppShell, Burger, Group, NavLink, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import {
  IconHome,
  IconSum,
  IconRefresh,
  IconFilter,
  IconTemperature,
  IconUser,
} from "@tabler/icons-react"

export const Route = createRootRoute({
  component: () => {
    const [opened, { toggle }] = useDisclosure()

    return (
      <>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="md">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Text size="xl" fw={700} c="violet">
                🚀 STEM Playground
              </Text>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar p="md">
            <Text size="sm" c="dimmed" mb="md">
              Interactive Demos
            </Text>

            <NavLink
              component={Link}
              to="/"
              label="Home"
              leftSection={<IconHome size={16} />}
            />

            <NavLink
              component={Link}
              to="/sum"
              label="Sum Calculator"
              leftSection={<IconSum size={16} />}
            />

            <NavLink
              component={Link}
              to="/palindrome"
              label="Palindrome Checker"
              leftSection={<IconRefresh size={16} />}
            />

            <NavLink
              component={Link}
              to="/filter"
              label="Even Numbers"
              leftSection={<IconFilter size={16} />}
            />

            <NavLink
              component={Link}
              to="/temperature"
              label="Temperature"
              leftSection={<IconTemperature size={16} />}
            />

            <NavLink
              component={Link}
              to="/person"
              label="Person Formatter"
              leftSection={<IconUser size={16} />}
            />
          </AppShell.Navbar>

          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
        <TanStackRouterDevtools />
      </>
    )
  },
})
