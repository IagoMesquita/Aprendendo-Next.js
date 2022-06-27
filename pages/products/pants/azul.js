import Link from "next/link";
export default function Azul() {
  return (
    <>
    <nav>
      <Link href='/'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Voltar</a></Link><br/>
      <Link href='/products'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Produtos</a></Link><br/>
    </nav>
    <h1>Calça Azul: R$ 99.99</h1>
    </>
 
  )

}