import { AppShell, Group, Title, Burger, NavLink } from '@mantine/core'
import { Link, Outlet } from 'react-router'
import { useDisclosure } from '@mantine/hooks'

export default function Layout() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 170, breakpoint: 'sm', collapsed: { mobile: !opened, desktop: !opened } }}
      padding="md"
      styles={{
        header: { background: '#ffffff', borderBottom: '1px solid #e6e1f2' },
        navbar: { background: '#f8f7fc', borderRight: '1px solid #e6e1f2' },
        main: { background: '#faf9fe' },
        footer: { background: '#f8f7fc', borderTop: '1px solid #e6e1f2', color: '#7a7391' },
      }}
    >

      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" color="#7a63b8" />
            <Title order={3} c="#584090" >Gest</Title>
          </Group>
        </Group>
      </AppShell.Header>


      <AppShell.Navbar p="md">
        <NavLink component={Link} to="/" label="Главная" onClick={toggle} styles={{ label: { color: '#2e2a3d' } }} />
        <NavLink component={Link} to="/catalog" label="Каталог" onClick={toggle} styles={{ label: { color: '#2e2a3d' } }} />
        <NavLink component={Link} to="/quiz" label="Тренажёр" onClick={toggle} styles={{ label: { color: '#2e2a3d' } }} />
        <NavLink component={Link} to="/login" label="Войти" onClick={toggle} styles={{ label: { color: '#2e2a3d' } }} />
      </AppShell.Navbar>


      <AppShell.Main>
        <Outlet />
      </AppShell.Main>


      <AppShell.Footer p="md">
        © 2026 Gest — тренажёр-справочник языка жестов
      </AppShell.Footer>
    </AppShell>
  )
}