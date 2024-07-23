import { render, screen } from '@testing-library/react'
import App from './App'

describe('Testa o componente App', () => {
  test('Deve haver o título na Hello, word!', async () => {
    render(<App />)

    const title = await screen.findByRole('heading', {
      name: 'Hello, word!'
    })

    expect(title).toBeInTheDocument()
  })

  test('Devem haver dois título na página', async () => {
    render(<App />)

    const title = await screen.findAllByRole('heading')

    expect(title).toHaveLength(2)
  })
})
