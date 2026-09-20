import { Container, Title, TextInput, PasswordInput, Button, Card } from '@mantine/core'

export default function Login() {
  return (
    <Container size="xs" py="xl">
      <Card
        shadow="sm"
        padding="lg"
        withBorder
        style={{ background: '#ffffff', borderColor: '#e6e1f2' }}
      >
        <Title order={2} mb="md" c="#584090">Вход</Title>
        <TextInput
          label="Email"
          placeholder="you@example.com"
          styles={{
            label: { color: '#7a7391' },
            input: { borderColor: '#e6e1f2', background: '#faf9fe' },
          }}
        />
        <PasswordInput
          label="Пароль"
          mt="md"
          styles={{
            label: { color: '#7a7391' },
            input: { borderColor: '#e6e1f2', background: '#faf9fe' },
          }}
        />
        <Button fullWidth mt="xl" color="violet">Войти</Button>
      </Card>
    </Container>
  )
}