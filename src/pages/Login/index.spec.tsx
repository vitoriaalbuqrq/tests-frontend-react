import { fireEvent, render, screen } from "@testing-library/react"
import Login from "."

const navigateMock = vi.fn();

describe("Testa o componente de Login", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate(){
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children),
  }))

  test("Deve haver um título escrito Sign in", async () => {
    render(<Login />)
    const title = await screen.findByRole('heading', {
      name: 'Sign In',
    })

    expect(title).toBeInTheDocument();
  })

  test("Deve haver 2 inputs", async () => {
    render(<Login />)

    const inputs = await screen.findAllByRole('textbox')

    expect(inputs).toHaveLength(2);
  })

  test("Deve haver um input para email", async () => {
    render(<Login />)

    const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail')

    expect(inputEmail).toBeInTheDocument();
  })

  test("Deve haver um input para senha", async () => {
    render(<Login />)

    const inputPassword = await screen.findByPlaceholderText('Insira sua senha')

    expect(inputPassword).toBeInTheDocument();
  })

  test("Deve haver um botão na tela", async () => {
    render(<Login />)

    const button = await screen.findByRole('button')

    expect(button.textContent).toBe("Login");
  })

  test("O button deve ser clicado", async () => {
    render(<Login />)

    const button = await screen.findByRole('button')
    //simular o clique do button
    fireEvent.click(button)
    expect(navigateMock).toHaveBeenCalledTimes(1);
  })

  test("Deve haver um link para ir para a página de Sign up", async () => {
    render(<Login />);

    const link = screen.getByText("Não tem cadastro? Clique aqui!");

    expect(link).toBeInTheDocument();
  });

})