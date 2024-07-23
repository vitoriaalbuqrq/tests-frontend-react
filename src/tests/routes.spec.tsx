import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"
import { render, screen } from "@testing-library/react"

describe('Testa o componente MainRouter', () => {

  test('Deve renderizar a página de login', async() => {
    render(
      //Rota em memoria do router-dom para escrever testes
      <MemoryRouter initialEntries={["/"]}>
        <MainRoutes /> 
      </MemoryRouter>
    )
    //expect(screen.getByText('Sign In'))
    const title = await screen.findByRole("heading", {
      name: 'Sign In'
    });
    
    expect(title).toBeInTheDocument();
  })

  test('Deve renderizar a página de Cadastro', async() => {
    render(
      //Rota em memoria do router-dom para escrever testes
      <MemoryRouter initialEntries={["/sign-up"]}>
        <MainRoutes /> 
      </MemoryRouter>
    )

    const title = await screen.findByRole("heading", {
      name: 'Cadastre-se'
    });
    expect(title).toBeInTheDocument();
  })

  test('Deve renderizar a página de Dashboard', async() => {
    render(
      //Rota em memoria do router-dom para escrever testes
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainRoutes /> 
      </MemoryRouter>
    )
    //expect(screen.getByText('Sign In'))
    const title = await screen.getByText("Dashboard");
    expect(title).toBeInTheDocument();
  })

  test('Deve renderizar a página de Dashboard', async() => {
    render(
      //Rota em memoria do router-dom para escrever testes
      <MemoryRouter initialEntries={["/not-found"]}>
        <MainRoutes /> 
      </MemoryRouter>
    )
    //expect(screen.getByText('Sign In'))
    const title = await screen.getByText("404 Page Not Found");
    expect(title).toBeInTheDocument();
  })
})