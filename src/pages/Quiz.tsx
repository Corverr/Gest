import { Container, Title, Text, Button } from '@mantine/core'

export default function Quiz() {
  return (
    <Container py="xl">
      <Title order={1}>Тренажёр</Title>
      <Text c="dimmed" mt="sm">
        Здесь будет тест на знание жестов. Пока в разработке.
      </Text>
      <Button mt="xl">Начать тест</Button>
    </Container>
  )
}