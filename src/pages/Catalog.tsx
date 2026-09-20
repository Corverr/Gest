import { useState } from 'react'
import { Container, Title, SimpleGrid, Card, Text, Image, Badge } from '@mantine/core'
import { Link } from 'react-router'
import { ComboBox, Input, ListBox, ListBoxItem, Label, Popover } from 'react-aria-components'
import { gestures } from '../data/gestures'

export default function Catalog() {
  const [query, setQuery] = useState('')

  const filtered = gestures.filter(g =>
    g.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Container py="xl">
      <Title order={1} c="#584090">Каталог жестов</Title>

      <ComboBox className="aria-combobox" inputValue={query} onInputChange={setQuery}>
        <Label style={{ color: '#7a7391', fontSize: '0.875rem', marginBottom: '4px', display: 'block' }}>
          Поиск жеста
        </Label>
        <Input
          placeholder="Введите название..."
          style={{
            border: '1px solid #e6e1f2',
            borderRadius: '8px',
            padding: '8px 12px',
            background: '#ffffff',
            color: '#2e2a3d',
          }}
        />
        <Popover>
          <ListBox>
            {filtered.map(g => (
              <ListBoxItem key={g.id} id={g.id} href={`/gesture/${g.id}`}>
                {g.title}
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </ComboBox>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} mt="xl">
        {filtered.map(g => (
          <Card
            key={g.id}
            shadow="sm"
            padding="lg"
            withBorder
            component={Link}
            to={`/gesture/${g.id}`}
            style={{
              background: '#ffffff',
              borderColor: '#e6e1f2',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
          >
            <Card.Section>
              <Image src={g.image} height={160} alt={g.title} />
            </Card.Section>
            <Text fw={500} mt="md" c="#2e2a3d">{g.title}</Text>
            <Text size="sm" mt="xs" c="#7a7391">{g.description}</Text>
            <Badge mt="sm" variant="light" color="violet">{g.category}</Badge>
          </Card>
        ))}
      </SimpleGrid>

      {filtered.length === 0 && (
        <Text mt="xl" c="#7a7391">Ничего не найдено</Text>
      )}
    </Container>
  )
}