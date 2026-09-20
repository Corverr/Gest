import { Container, Title, Text, Button, Group, Card, SimpleGrid } from '@mantine/core'
import { Link } from 'react-router'
import { gestures, categories } from '../data/gestures'

export default function Home() {
  const wordOfDay = gestures[Math.floor(Math.random() * gestures.length)]

  return (
    <Container py="xl">
      <Title order={1} c="#584090">Gest</Title>
      <Text c="dimmed" mt="sm">Интерактивный справочник языка жестов</Text>

      <Group mt="xl">
        <Button color="violet" component={Link} to="/catalog">Каталог</Button>
        <Button variant="outline" color="violet" component={Link} to="/quiz">Пройти тест</Button>
      </Group>

      <Title order={2} mt="xl" c="#584090">Слово дня</Title>
      <Card
        shadow="sm"
        padding="lg"
        mt="md"
        withBorder
        style={{ background: '#ffffff', borderColor: '#e6e1f2' }}
      >
        <Title order={3} c="#2e2a3d">{wordOfDay.title}</Title>
        <Text mt="xs" c="#7a7391">{wordOfDay.description}</Text>
      </Card>

      <Title order={2} mt="xl" c="#584090">Категории</Title>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} mt="md">
        {categories.filter(c => c !== 'Все').map(cat => (
          <Card
            key={cat}
            shadow="sm"
            padding="md"
            withBorder
            style={{ background: '#f8f7fc', borderColor: '#e6e1f2' }}
          >
            <Text fw={500} c="#584090">{cat}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}