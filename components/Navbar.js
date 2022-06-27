import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return(
    <>
      <nav className={ styles.navbar }>
        <Link href='/'><a>Home</a></Link><br/>
        <Link href='/products'><a>Produtos</a></Link><br/>
        <Link href='/about'><a>Sobre nós</a></Link>
        <Link href='/todos'><a>Tarefas</a></Link>
        <Link href='/contact'><a>Contatos</a></Link>
      </nav>
    </>
  )
}