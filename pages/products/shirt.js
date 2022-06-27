import Link from "next/link";
export default function Shirt() {
  return (
    <>
    <nav>
      <Link href='/'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Voltar</a></Link><br/>
      <Link href='/products'><a style={{ fontWeight: 'bold', color: 'blueviolet' }}>Produtos</a></Link><br/>
    </nav>
    <h1>Shirts</h1>
    </>
 
  )

}