import { FormEvent } from 'react';
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    navigate('/dashboard')
  }
  
  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}