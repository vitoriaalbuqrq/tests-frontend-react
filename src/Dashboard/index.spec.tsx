import { render, screen } from "@testing-library/react"
import DashBoard from ".";

describe("Testa o componente Dashboard", () => {

  test("Deve haver um título escrito Dashboard", async () => {
    render(<DashBoard />)
    const title = await screen.findByRole('heading')

    expect(title).toHaveTextContent('Dashboard');
  })

})