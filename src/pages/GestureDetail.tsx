import { useParams, Link } from 'react-router'
import { Container, Title, Text, Card, Image, Button, Badge, Group } from '@mantine/core'
import { gestures } from '../data/gestures'

export default function GestureDetail() {
  const { id } = useParams()
  const gesture = gestures.find(g => g.id === Number(id))

  if (!gesture) {
    return (
      <Container py="xl">
        <Title order={2}>Жест не найден</Title>
        <Button component={Link} to="/catalog" mt="md">Вернуться в каталог</Button>
      </Container>
    )
  }

  return (
    <Container py="xl" size="md">
      <Button variant="subtle" color="violet" component={Link} to="/catalog">← Назад</Button>

      <Card
        shadow="sm"
        padding="lg"
        mt="md"
        withBorder
        style={{ background: '#ffffff', borderColor: '#e6e1f2' }}
      >
        <Card.Section>
          <Image src={gesture.image} height={300} alt={gesture.title} />
        </Card.Section>
        <Group justify="space-between" mt="md">
          <Title order={2} c="#584090">{gesture.title}</Title>
          <Badge variant="light" color="violet">{gesture.category}</Badge>
        </Group>
        <Text mt="md" c="#2e2a3d">{gesture.description}</Text>
        <Group mt="xl">
          <Button color="violet">В избранное</Button>
          <Button variant="outline" color="violet" component={Link} to="/quiz">Проверить себя</Button>
        </Group>
      </Card>
    </Container>
  )
}