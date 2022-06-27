import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ count, setCount ] = useState(0);
  return (
    <>
      <Head>
        <title>Página inicial</title>
        <meta name="keywords" content="Roupas, calçados, bonés" />
        <meta name='description' content='Encontre o melhor de tudo'></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={ styles.title }>Hello World Next!</h1>
        <div>
          <button 
          type='button'
          onClick={ () => setCount( count + 1 ) } 
          >+</button>
            <span>{ count }</span>
          <button
            type='button'
            onClick={ () => setCount( count - 1 ) } 
          >-</button>
        </div>
        <Image src='/images/city.jpg' width='400px' height='500px' alt='imagem-de-cidade-a-noite'/>
      </div>
    </>
  )
}
